import { useMount } from "ahooks";
import { useState } from "react";

const MemoryLeak = () => {
  const [state, setState] = useState<any[]>([]);

  useMount(() => {
    setInterval(() => {
      setState((state) =>
        state.concat(
          {
            id: "61d2f53fbd2fcb903e9f20d2",
            email: "lillie_macdonald@flexigen.corsica",
            roles: ["admin", "member"],
            apiKey: "e78cb939-300b-4dd3-a9ff-206bd59a5864",
            profile: {
              dob: "1991-03-05",
              name: "Lillie Macdonald",
              about:
                "Laborum velit fugiat ipsum incididunt aute sunt et enim non labore ullamco nostrud est ea. Aute exercitation dolore velit ad.",
              address: "56 Seabring Street, Roeville, North Dakota",
              company: "Flexigen",
              location: {
                lat: -64.593685,
                long: 132.341021,
              },
            },
            username: "lillie91",
            createdAt: "2010-07-14T20:13:30.373Z",
            updatedAt: "2010-07-15T20:13:30.373Z",
          },
          {
            id: "61d2f54093cd362f64732011",
            email: "connie_mcintyre@zillactic.pohl",
            roles: ["guest", "member"],
            apiKey: "470796c7-19bc-4499-b621-5caf15954f0e",
            profile: {
              dob: "1989-01-29",
              name: "Connie Mcintyre",
              about:
                "Sit ea consequat exercitation labore est culpa excepteur amet. Eu est excepteur proident consectetur ut ea irure qui labore mollit mollit anim eiusmod.",
              address: "16 Java Street, Toftrees, Vermont",
              company: "Zillactic",
              location: {
                lat: 3.861121,
                long: -116.391786,
              },
            },
            username: "connie89",
            createdAt: "2012-11-05T23:39:26.194Z",
            updatedAt: "2012-11-06T23:39:26.194Z",
          },
          {
            id: "61d2f54010f7cdc334523183",
            email: "gallagher_schwartz@andershun.gb",
            roles: ["member"],
            apiKey: "a15fce21-8ad3-4653-9951-8b575b048481",
            profile: {
              dob: "1988-12-24",
              name: "Gallagher Schwartz",
              about:
                "Sit consequat occaecat laboris laborum aliqua duis eiusmod. Officia aliqua irure enim exercitation voluptate ullamco ipsum labore duis cillum enim laborum elit.",
              address: "85 Havens Place, Nanafalia, Rhode Island",
              company: "Andershun",
              location: {
                lat: 58.463844,
                long: -61.432228,
              },
            },
            username: "gallagher88",
            createdAt: "2010-10-18T01:01:00.806Z",
            updatedAt: "2010-10-19T01:01:00.806Z",
          },
          {
            id: "61d2f54011859802013e3c02",
            email: "noreen_aguilar@uniworld.tax",
            roles: ["guest", "member"],
            apiKey: "3a68ec2f-761a-4920-8ad7-baec31b79cdb",
            profile: {
              dob: "1990-11-01",
              name: "Noreen Aguilar",
              about:
                "Ipsum Lorem eiusmod aliquip nulla consequat labore sint laboris. Sit nisi eu non est nostrud.",
              address: "50 Crooke Avenue, Foscoe, Louisiana",
              company: "Uniworld",
              location: {
                lat: -75.768005,
                long: -160.808284,
              },
            },
            username: "noreen90",
            createdAt: "2012-01-29T02:26:55.627Z",
            updatedAt: "2012-01-30T02:26:55.627Z",
          },
          {
            id: "61d2f5406230340b205ac0bc",
            email: "ofelia_watkins@exoswitch.credit",
            roles: ["member", "admin"],
            apiKey: "e8663fd7-29f9-43c4-90ea-2eb078bfc68e",
            profile: {
              dob: "1992-01-14",
              name: "Ofelia Watkins",
              about:
                "Culpa aliqua eiusmod reprehenderit incididunt consequat et voluptate fugiat exercitation ipsum dolor cupidatat sint. Elit in enim ipsum et labore consectetur est nostrud aute qui consectetur.",
              address: "42 Norwood Avenue, Dodge, Connecticut",
              company: "Exoswitch",
              location: {
                lat: -86.443674,
                long: 140.896129,
              },
            },
            username: "ofelia92",
            createdAt: "2012-01-23T04:15:10.616Z",
            updatedAt: "2012-01-24T04:15:10.616Z",
          }
        )
      );
    }, 1000);
  });

  return <div>{JSON.stringify(state)} </div>;
};

export default MemoryLeak;
