import { trigger, state, style, transition, animate, group, keyframes } from '@angular/animations';
export const showStateTrigger = trigger('showState', [
    // transition('void => *', [
    //     style({
    //         opacity: 0
    //     }),
    //     animate(300)
    // ]),
    // transition('shown => void', animate(300, style({
    //     opacity: 0,
    // })))
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(300)
    ]),
    transition(':leave', animate(300, style({
        opacity: 0,
    })))
]);

export const animateStateTrigger = trigger('animateState', [
    transition('* => *', [
        animate('4000ms cubic-bezier(.17,.67,0,.99)', style({ //website for complex easing http://easings.net/ and cubic-bezier.com
            width: 0,
        })),
        animate(400, style({
            width: '*' //you can use this when the width and other dimensional properties are set dynamically, or if you don't know the value
        }))
    ])
])

// export const listStateTrigger = trigger('listState', [ //non-keyframe example:
//     transition(':enter', [
//         style({
//             opacity: 0,
//             backgroundColor: 'white',
//         }),
//         group([ //takes an array of all the animations we want to play together
//             animate(1000, style ({
//                 opacity: 0.7
//             })),
//             animate(2000, style({
//                 backgroundColor: 'red',
//             }))
//         ]),
//         animate(300, style({
//             backgroundColor: 'lightBlue'
//         }))
//     ]),
//     transition(':leave', animate(300, style({
//         opacity: 0,
//     })))
// ]);

export const listStateTrigger = trigger('listState', [ //keyframe example:
    transition(':enter', [
        style({
            opacity: 0,
            backgroundColor: 'white',
        }),
        group([ //takes an array of all the animations we want to play together
            animate(1000, style ({
                opacity: 0.7
            })),
            animate('5000ms ease-out', keyframes([
                style({
                    backgroundColor: 'white',
                    offset: 0 // angular mixes the offset and the ease functions
                }),
                style({
                    backgroundColor: 'red',
                    offset: 0.8
                }),
                style({
                    backgroundColor: 'green',
                    offset: 1
                })
            ]))
        ]),
        animate(300, style({
            backgroundColor: 'lightBlue'
        }))
    ]),
    transition(':leave', animate(300, style({ 
        opacity: 0,
    })))
]);