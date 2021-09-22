import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
  sequence,
  animateChild,
  keyframes,
  group
} from "@angular/animations";

export const hitsEnterLeaveAnimation = trigger("stagger", [
  transition("* => *", [
    group([
      query(
        "li.list-item:enter",
        [
          style({ width: 0, height: 0, padding: 0 }),
          stagger(50, [
            animate("200ms ease-in-out", style({ height: "*", padding: "*" })),
            animate(
              "200ms ease-in-out",
              style({ width: "*", height: "*", padding: "*" })
            )
          ])
        ],
        { optional: true }
      ),
      query(
        "li.list-item:leave",
        [
          style({ width: "*", opacity: 1, height: "*", padding: "*" }),
          animate("200ms ease-in-out", style({ opacity: 0 })),
          animate("200ms ease-in-out", style({ height: 0, padding: 0 }))
        ],
        { optional: true }
      )
    ])
  ])
]);

export const listHeader = trigger("listHeader", [
  transition("* => *", [
    query(
      ":enter",
      [
        style({ height: 0, padding: 0, margin: 0, borderBottomWidth: 0 }),
        stagger(200, [
          animate(
            "200ms",
            style({
              height: "*",
              padding: "*",
              margin: "*",
              borderBottomWidth: "*"
            })
          )
        ])
      ],
      { optional: true }
    ),
    query(
      ":leave",
      [
        style({
          height: "*",
          padding: "*",
          margin: "*"
        }),
        stagger(200, [
          animate(
            "200ms ease-in-out",
            style({ height: 0, padding: 0, margin: 0 })
          )
        ])
      ],
      { optional: true }
    )
  ])
]);
