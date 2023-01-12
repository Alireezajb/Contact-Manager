import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';



const baseStyle = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '95%'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      
      transition(':increment', [
        style({
          position: 'relative',
          overflow: 'hidden',
        }),

        query(':enter , :leave', [

          baseStyle

        ], { optional: true }),

        group([

          query(':leave', [
            animate('200ms ease-in', style({
              opacity: '0',
              transform: 'translateX(-50px)'
            }))

          ], { optional: true }),


          query(':enter', [
            style({
              transform: 'translateX(50px)',
              opacity: 0
            }),

            animate('250ms 120ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0)'
            }))

          ], { optional: true }),
        ]),



      ]),

      transition(':decrement', [
        style({
          position: 'relative',
          overflow: 'hidden',
        }),

        query(':enter , :leave', [

          baseStyle

        ], { optional: true }),

        group([

          query(':leave', [
            animate('200ms ease-in', style({
              opacity: '0',
              transform: 'translateX(50px)'
            }))

          ], { optional: true }),


          query(':enter', [
            style({
              transform: 'translateX(-50px)',
              opacity: 0
            }),

            animate('250ms 120ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0)'
            }))

          ], { optional: true }),
        ]),



      ]),

      transition('*=> secondary', [
        style({
          position: 'relative',
          overflow: 'hidden',
        }),

        query(':enter , :leave', [
          baseStyle

        ], { optional: true }),

        group([

          query(':leave', [
            animate('200ms ease-in', style({
              opacity: '0',
              transform: 'scale(0.8)'
            }))

          ], { optional: true }),


          query(':enter', [
            style({
              transform: 'scale(1.2)',
              opacity: 0
            }),

            animate('250ms 120ms ease-out', style({
              opacity: 1,
              transform: 'scale(1)'
            }))

          ], { optional: true }),
        ])

      ]),

      transition('secondary => *', [
        style({
          position: 'relative',
          overflow: 'hidden',
        }),

        query(':enter , :leave', [
          baseStyle

        ], { optional: true }),

        group([

          query(':leave', [
            animate('200ms ease-in', style({
              opacity: '0',
              transform: 'scale(1.25)'
            }))

          ], { optional: true }),


          query(':enter', [
            style({
              transform: 'scale(0.8)',
              opacity: 0
            }),

            animate('250ms 120ms ease-out', style({
              opacity: 1,
              transform: 'scale(1)'
            }))

          ], { optional: true }),
        ])

      ])
    ]),

    trigger('bgAnim', [
      transition(':leave', [
        animate(1000, style({ opacity: 0 }))
      ])
    ]),

    trigger('fadeAnim', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(250, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(250, style({ opacity: 0 }))
      ])

    ])
  ]

})

export class AppComponent implements OnInit {

  dateTime!: Date

  ngOnInit(): void {

    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date();

    })

  }




  bg: string[] = ['https://i.picsum.photos/id/932/1920/1080.jpg?hmac=onZiaiLOjcyJ7j8FVe_kxvk3b-nRgVu9_5zng8hQPQc'];

  loadingBgImage !: boolean;

  prepearRouter(outlet: RouterOutlet): any {
    if (outlet.isActivated) {
      const tab = outlet.activatedRouteData['tab'];
      if (!tab) return 'secondary';
      return tab;
    }

  }
  async changeBackground() {

    this.loadingBgImage = true;
    const result = await fetch('https://picsum.photos/1920/1080')

    this.bg.push(result.url);
  }
  onBgImageLoad(event: Event) {

    //bg image has loaded remove old background from array

    const imageElement = event.target as HTMLImageElement;
    const src = imageElement.src;
    this.bg = this.bg.filter(b => b === src);

    this.loadingBgImage = false;
  }


}
