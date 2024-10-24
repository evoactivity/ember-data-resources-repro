// Import the framework and instantiate it
import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

await fastify.register(cors, {
  // put your options here
});

// Declare a route
fastify.get("/channels", async function handler(request, reply) {
  return {
    jsonapi: {
      version: "1.0",
    },
    data: [
      {
        type: "channels",
        id: "1",
        attributes: {
          name: "AE",
          epgId: "aande.us",
          number: 1,
          logo: {
            name: "channel-logos/original_clxkdj17e0000ypox1uaj99ri.gif",
            size: 5285,
            hash: "clxkdj17e0000ypox1uaj99ri",
            width: 200,
            height: 200,
            extname: "gif",
            mimeType: "image/gif",
            url: "/uploads/channel-logos/original_clxkdj17e0000ypox1uaj99ri.gif",
          },
          pinProtectedAt: null,
          disabledAt: null,
          createdAt: "2024-06-18T13:21:49.004+01:00",
          updatedAt: "2024-06-18T13:21:49.665+01:00",
        },
        relationships: {
          categories: {
            data: [
              {
                type: "epg-categories",
                id: "21",
              },
            ],
          },
        },
      },
      {
        type: "channels",
        id: "3",
        attributes: {
          name: "ABC",
          epgId: "abc.us",
          number: 2,
          logo: {
            name: "channel-logos/original_clxkdj1cb0008ypox7avde5qt.webp",
            size: 8.82,
            hash: "clxkdj1cb0008ypox7avde5qt",
            width: 256,
            format: "webp",
            height: 256,
            extname: "webp",
            mimeType: "image/webp",
            breakpoints: {
              thumbnail: {
                name: "channel-logos/thumbnail_clxkdj1cb0008ypox7avde5qt.webp",
                hash: "clxkdj1cb0008ypox7avde5qt",
                extname: "webp",
                mimeType: "image/webp",
                format: "webp",
                width: 156,
                height: 156,
                size: 5,
                url: "/uploads/channel-logos/thumbnail_clxkdj1cb0008ypox7avde5qt.webp",
              },
              small: {
                name: "channel-logos/small_clxkdj1cb0008ypox7avde5qt.webp",
                hash: "clxkdj1cb0008ypox7avde5qt",
                extname: "webp",
                mimeType: "image/webp",
                format: "webp",
                width: 100,
                height: 100,
                size: 3.05,
                url: "/uploads/channel-logos/small_clxkdj1cb0008ypox7avde5qt.webp",
              },
            },
            url: "/uploads/channel-logos/original_clxkdj1cb0008ypox7avde5qt.webp",
          },
          pinProtectedAt: null,
          disabledAt: null,
          createdAt: "2024-06-18T13:21:49.069+01:00",
          updatedAt: "2024-06-18T13:21:49.857+01:00",
        },
        relationships: {
          categories: {
            data: [
              {
                type: "epg-categories",
                id: "21",
              },
            ],
          },
        },
      },
      {
        type: "channels",
        id: "4",
        attributes: {
          name: "ABC News",
          epgId: "abcnews.us",
          number: 3,
          logo: {
            name: "channel-logos/original_clxkdj1cl000bypox1gw2hjcq.webp",
            size: 8.82,
            hash: "clxkdj1cl000bypox1gw2hjcq",
            width: 256,
            format: "webp",
            height: 256,
            extname: "webp",
            mimeType: "image/webp",
            breakpoints: {
              thumbnail: {
                name: "channel-logos/thumbnail_clxkdj1cl000bypox1gw2hjcq.webp",
                hash: "clxkdj1cl000bypox1gw2hjcq",
                extname: "webp",
                mimeType: "image/webp",
                format: "webp",
                width: 156,
                height: 156,
                size: 5,
                url: "/uploads/channel-logos/thumbnail_clxkdj1cl000bypox1gw2hjcq.webp",
              },
              small: {
                name: "channel-logos/small_clxkdj1cl000bypox1gw2hjcq.webp",
                hash: "clxkdj1cl000bypox1gw2hjcq",
                extname: "webp",
                mimeType: "image/webp",
                format: "webp",
                width: 100,
                height: 100,
                size: 3.05,
                url: "/uploads/channel-logos/small_clxkdj1cl000bypox1gw2hjcq.webp",
              },
            },
            url: "/uploads/channel-logos/original_clxkdj1cl000bypox1gw2hjcq.webp",
          },
          pinProtectedAt: null,
          disabledAt: null,
          createdAt: "2024-06-18T13:21:49.069+01:00",
          updatedAt: "2024-06-18T13:21:49.864+01:00",
        },
        relationships: {
          categories: {
            data: [
              {
                type: "epg-categories",
                id: "22",
              },
            ],
          },
        },
      },
      {
        type: "channels",
        id: "6",
        attributes: {
          name: "AMC",
          epgId: "amc.us",
          number: 4,
          logo: {
            name: "channel-logos/original_clxkdj1cj0009ypoxc9702ta5.webp",
            size: 3.4,
            hash: "clxkdj1cj0009ypoxc9702ta5",
            width: 256,
            format: "webp",
            height: 256,
            extname: "webp",
            mimeType: "image/webp",
            breakpoints: {
              thumbnail: {
                name: "channel-logos/thumbnail_clxkdj1cj0009ypoxc9702ta5.webp",
                hash: "clxkdj1cj0009ypoxc9702ta5",
                extname: "webp",
                mimeType: "image/webp",
                format: "webp",
                width: 156,
                height: 156,
                size: 2.17,
                url: "/uploads/channel-logos/thumbnail_clxkdj1cj0009ypoxc9702ta5.webp",
              },
              small: {
                name: "channel-logos/small_clxkdj1cj0009ypoxc9702ta5.webp",
                hash: "clxkdj1cj0009ypoxc9702ta5",
                extname: "webp",
                mimeType: "image/webp",
                format: "webp",
                width: 100,
                height: 100,
                size: 1.45,
                url: "/uploads/channel-logos/small_clxkdj1cj0009ypoxc9702ta5.webp",
              },
            },
            url: "/uploads/channel-logos/original_clxkdj1cj0009ypoxc9702ta5.webp",
          },
          pinProtectedAt: null,
          disabledAt: null,
          createdAt: "2024-06-18T13:21:49.070+01:00",
          updatedAt: "2024-06-18T13:21:49.862+01:00",
        },
        relationships: {
          categories: {
            data: [
              {
                type: "epg-categories",
                id: "21",
              },
            ],
          },
        },
      },
    ],
    included: [
      {
        type: "epg-categories",
        id: "21",
        attributes: {
          name: "USA",
          order: 0,
          createdAt: "2024-06-18T13:21:48.939+01:00",
          updatedAt: "2024-06-18T13:21:48.939+01:00",
          pinProtectedAt: null,
        },
      },
      {
        type: "epg-categories",
        id: "22",
        attributes: {
          name: "News-Weather",
          order: 0,
          createdAt: "2024-06-18T13:21:48.947+01:00",
          updatedAt: "2024-06-18T13:21:48.947+01:00",
          pinProtectedAt: null,
        },
      },
    ],
  };
});

fastify.get("/channels/:id", async function handler(request, reply) {
  // delay
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return {
    jsonapi: {
      version: "1.0",
    },
    data: {
      type: "channels",
      id: "1",
      attributes: {
        name: "AE",
        epgId: "aande.us",
        number: 1,
        logo: {
          name: "channel-logos/original_clxkdj17e0000ypox1uaj99ri.gif",
          size: 5285,
          hash: "clxkdj17e0000ypox1uaj99ri",
          width: 200,
          height: 200,
          extname: "gif",
          mimeType: "image/gif",
          url: "/uploads/channel-logos/original_clxkdj17e0000ypox1uaj99ri.gif",
        },
        pinProtectedAt: null,
        disabledAt: null,
        createdAt: "2024-06-18T13:21:49.004+01:00",
        updatedAt: "2024-06-18T13:21:49.665+01:00",
      },
      relationships: {
        categories: {
          data: [
            {
              type: "epg-categories",
              id: "21",
            },
          ],
        },
        programmes: {
          data: [
            {
              type: "programmes",
              id: "5583744",
            },
            {
              type: "programmes",
              id: "5583745",
            },
            {
              type: "programmes",
              id: "5583746",
            },
            {
              type: "programmes",
              id: "5583747",
            },
            {
              type: "programmes",
              id: "5583748",
            },
            {
              type: "programmes",
              id: "5648748",
            },
            {
              type: "programmes",
              id: "5648749",
            },
            {
              type: "programmes",
              id: "5648750",
            },
            {
              type: "programmes",
              id: "5648751",
            },
            {
              type: "programmes",
              id: "5648752",
            },
            {
              type: "programmes",
              id: "5648753",
            },
            {
              type: "programmes",
              id: "5648754",
            },
            {
              type: "programmes",
              id: "5648755",
            },
            {
              type: "programmes",
              id: "5648756",
            },
            {
              type: "programmes",
              id: "5648757",
            },
            {
              type: "programmes",
              id: "5648758",
            },
            {
              type: "programmes",
              id: "5648759",
            },
            {
              type: "programmes",
              id: "5648760",
            },
            {
              type: "programmes",
              id: "5648761",
            },
            {
              type: "programmes",
              id: "5648762",
            },
            {
              type: "programmes",
              id: "5648763",
            },
            {
              type: "programmes",
              id: "5648764",
            },
            {
              type: "programmes",
              id: "5648765",
            },
            {
              type: "programmes",
              id: "5648766",
            },
            {
              type: "programmes",
              id: "5648767",
            },
            {
              type: "programmes",
              id: "5648768",
            },
            {
              type: "programmes",
              id: "5648769",
            },
            {
              type: "programmes",
              id: "5648770",
            },
            {
              type: "programmes",
              id: "5648771",
            },
            {
              type: "programmes",
              id: "5648772",
            },
            {
              type: "programmes",
              id: "5648773",
            },
            {
              type: "programmes",
              id: "5648774",
            },
            {
              type: "programmes",
              id: "5782812",
            },
            {
              type: "programmes",
              id: "5782813",
            },
            {
              type: "programmes",
              id: "5782814",
            },
            {
              type: "programmes",
              id: "5782815",
            },
            {
              type: "programmes",
              id: "5782816",
            },
            {
              type: "programmes",
              id: "5782817",
            },
            {
              type: "programmes",
              id: "5782818",
            },
            {
              type: "programmes",
              id: "5782819",
            },
            {
              type: "programmes",
              id: "5782820",
            },
            {
              type: "programmes",
              id: "5782821",
            },
            {
              type: "programmes",
              id: "5782822",
            },
            {
              type: "programmes",
              id: "5782823",
            },
            {
              type: "programmes",
              id: "5782824",
            },
            {
              type: "programmes",
              id: "5782825",
            },
            {
              type: "programmes",
              id: "5782826",
            },
            {
              type: "programmes",
              id: "5782827",
            },
            {
              type: "programmes",
              id: "5782828",
            },
            {
              type: "programmes",
              id: "5782829",
            },
            {
              type: "programmes",
              id: "5782830",
            },
            {
              type: "programmes",
              id: "5782831",
            },
            {
              type: "programmes",
              id: "5782832",
            },
            {
              type: "programmes",
              id: "5782833",
            },
            {
              type: "programmes",
              id: "5782837",
            },
            {
              type: "programmes",
              id: "5782838",
            },
            {
              type: "programmes",
              id: "5782839",
            },
            {
              type: "programmes",
              id: "5782840",
            },
            {
              type: "programmes",
              id: "5782841",
            },
            {
              type: "programmes",
              id: "5782843",
            },
            {
              type: "programmes",
              id: "5782845",
            },
            {
              type: "programmes",
              id: "5782846",
            },
            {
              type: "programmes",
              id: "5782847",
            },
            {
              type: "programmes",
              id: "5782848",
            },
            {
              type: "programmes",
              id: "5782849",
            },
            {
              type: "programmes",
              id: "5782850",
            },
            {
              type: "programmes",
              id: "5782851",
            },
            {
              type: "programmes",
              id: "5782852",
            },
            {
              type: "programmes",
              id: "5782853",
            },
            {
              type: "programmes",
              id: "5782854",
            },
            {
              type: "programmes",
              id: "5782855",
            },
            {
              type: "programmes",
              id: "5782856",
            },
            {
              type: "programmes",
              id: "5782857",
            },
            {
              type: "programmes",
              id: "5782858",
            },
            {
              type: "programmes",
              id: "5782859",
            },
            {
              type: "programmes",
              id: "5782860",
            },
            {
              type: "programmes",
              id: "5782861",
            },
            {
              type: "programmes",
              id: "5782862",
            },
            {
              type: "programmes",
              id: "5782863",
            },
            {
              type: "programmes",
              id: "5782864",
            },
            {
              type: "programmes",
              id: "5782865",
            },
            {
              type: "programmes",
              id: "5583714",
            },
            {
              type: "programmes",
              id: "5583715",
            },
            {
              type: "programmes",
              id: "5583716",
            },
            {
              type: "programmes",
              id: "5583717",
            },
            {
              type: "programmes",
              id: "5583718",
            },
            {
              type: "programmes",
              id: "5583719",
            },
            {
              type: "programmes",
              id: "5583720",
            },
            {
              type: "programmes",
              id: "5583721",
            },
            {
              type: "programmes",
              id: "5583722",
            },
            {
              type: "programmes",
              id: "5583723",
            },
            {
              type: "programmes",
              id: "5583724",
            },
            {
              type: "programmes",
              id: "5583725",
            },
            {
              type: "programmes",
              id: "5583726",
            },
            {
              type: "programmes",
              id: "5583727",
            },
            {
              type: "programmes",
              id: "5583728",
            },
            {
              type: "programmes",
              id: "5583729",
            },
            {
              type: "programmes",
              id: "5583730",
            },
            {
              type: "programmes",
              id: "5583731",
            },
            {
              type: "programmes",
              id: "5583732",
            },
            {
              type: "programmes",
              id: "5583733",
            },
            {
              type: "programmes",
              id: "5583734",
            },
            {
              type: "programmes",
              id: "5583735",
            },
            {
              type: "programmes",
              id: "5583736",
            },
            {
              type: "programmes",
              id: "5583737",
            },
            {
              type: "programmes",
              id: "5583738",
            },
            {
              type: "programmes",
              id: "5583739",
            },
            {
              type: "programmes",
              id: "5583740",
            },
            {
              type: "programmes",
              id: "5583741",
            },
            {
              type: "programmes",
              id: "5583742",
            },
            {
              type: "programmes",
              id: "5583743",
            },
            {
              type: "programmes",
              id: "5583749",
            },
            {
              type: "programmes",
              id: "5782811",
            },
            {
              type: "programmes",
              id: "5782834",
            },
            {
              type: "programmes",
              id: "5782835",
            },
            {
              type: "programmes",
              id: "5782836",
            },
            {
              type: "programmes",
              id: "5782842",
            },
            {
              type: "programmes",
              id: "5782844",
            },
          ],
        },
      },
    },
    included: [
      {
        type: "epg-categories",
        id: "21",
        attributes: {
          name: "USA",
          order: 0,
          createdAt: "2024-06-18T13:21:48.939+01:00",
          updatedAt: "2024-06-18T13:21:48.939+01:00",
          pinProtectedAt: null,
        },
      },
      {
        type: "programmes",
        id: "5583744",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained Special Presentation",
          description:
            "The fascination with lost treasures has captured mankind's curiosity for centuries, and new evidence and research have led many across the globe in the quest for vast riches.",
          startAt: "2024-10-23T05:03:00.000+01:00",
          endAt: "2024-10-23T06:05:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583745",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained Special Presentation",
          description:
            "Believers have researched texts and studied histories throughout centuries, not only to strengthen their faith, but to find deeper meanings and profound answers to existence itself.",
          startAt: "2024-10-23T06:05:00.000+01:00",
          endAt: "2024-10-23T07:06:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583746",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained Special Presentation",
          description:
            "Deep within the recesses of the US government archives are secrets that will never see the light of day; but thanks to eyewitness encounters and devoted research many odd events are being uncovered and re-examined.",
          startAt: "2024-10-23T07:06:00.000+01:00",
          endAt: "2024-10-23T08:05:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583747",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "Many believe it to be the Word of God, but others claim it contains inconsistencies and contradictions that could only be manmade.",
          startAt: "2024-10-23T08:05:00.000+01:00",
          endAt: "2024-10-23T09:01:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583748",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "One Day, One Bathroom: Quality Remodeling With FREE Installation!",
          description:
            "Trusted brand Jacuzzi and renowned interior designer, Christina Hall, share their secrets on how you can easily and affordably transform your bathroom into a gorgeous custom, safe and stylish space in 1 day! Call now for a FREE quote &amp; installation!",
          startAt: "2024-10-23T09:01:00.000+01:00",
          endAt: "2024-10-23T09:30:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648748",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Who Has Access to Your Personal Data?",
          description:
            "Even if YOU do everything right to protect yourself, company and institutional data breaches are out of your control. Nearly 1 out of 4 US consumers have been a victim of identity theft. Find out how LifeLock can help protect your identity.",
          startAt: "2024-10-23T10:30:00.000+01:00",
          endAt: "2024-10-23T11:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648749",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Amazing Facts With Doug Batchelor",
          description:
            "Pastor Doug Batchelor reveals facts about biblical events and brings new insight to frequently asked questions in Christian faith.",
          startAt: "2024-10-23T11:00:00.000+01:00",
          endAt: "2024-10-23T11:30:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648750",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "David Jeremiah",
          description:
            "Dr. David Jeremiah's goal is to deliver the unchanging Word of God to an ever-changing world.",
          startAt: "2024-10-23T11:30:00.000+01:00",
          endAt: "2024-10-23T12:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648751",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "While combing through a mind-blowing collection, Mike stares down the headlights of a rare Ford; the guys pick a Tennessee home hiding a big secret.",
          startAt: "2024-10-23T12:00:00.000+01:00",
          endAt: "2024-10-23T13:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648752",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "Mike and Frank are first in line to pick an incredible North Carolina collection of weird and wonderful circus and sideshow memorabilia.",
          startAt: "2024-10-23T13:00:00.000+01:00",
          endAt: "2024-10-23T14:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648753",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "Mike and Frank discover a fleet of amazing concept cars, some so unique they don't know how to price them.",
          startAt: "2024-10-23T14:00:00.000+01:00",
          endAt: "2024-10-23T15:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648754",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "The guys visit a hot-rod mechanic with an awesome collection of bubbletop cars and automobilia.",
          startAt: "2024-10-23T15:00:00.000+01:00",
          endAt: "2024-10-23T16:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648755",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "When the guys get a lead on what could be Aerosmith's original tour van, they head out on a cross-country trek in search of the holy grail of rock 'n' roll relics.",
          startAt: "2024-10-23T16:00:00.000+01:00",
          endAt: "2024-10-23T17:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648756",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "In Nashville, Tenn., Danielle introduces the guys to a former Chevy dealership that could provide an awesome new home base.",
          startAt: "2024-10-23T17:00:00.000+01:00",
          endAt: "2024-10-23T18:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648757",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "Mike and Danielle crawl into a Pittsburgh time capsule, while Frank and Robbie plow through six generations of stuff on one of Michigan's oldest farms.",
          startAt: "2024-10-23T18:00:00.000+01:00",
          endAt: "2024-10-23T19:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648758",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "Frank falls super hard for a '63 Corvette Stingray and he keeps raising his offer, which makes Robbie wonder if this is really Frank; Mike and Mefford kick off an ambitious restoration project.",
          startAt: "2024-10-23T19:00:00.000+01:00",
          endAt: "2024-10-23T20:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648759",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            'On a ramshackle New Jersey estate, Mike and Danielle go on a "Back to the Future" joyride in a DeLorean.',
          startAt: "2024-10-23T20:00:00.000+01:00",
          endAt: "2024-10-23T21:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648760",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "The guys find a Hollywood honey hole when they meet a stuntman from Hollywood's Golden Age; Al's California garage is overflowing with mind-blowing memorabilia.",
          startAt: "2024-10-23T21:00:00.000+01:00",
          endAt: "2024-10-23T22:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648761",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "The guys are wowed by an epic Iowa collection of classic cars and motorbikes; Danielle and Robbie hail Milwaukee's king of coin-op.",
          startAt: "2024-10-23T22:00:00.000+01:00",
          endAt: "2024-10-23T23:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648762",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "Mike and Frank hit a down and dirty old-school pick in Illinois while Danielle and Robbie enjoy a high-speed joyride in a one-of-a-kind rat rod.",
          startAt: "2024-10-23T23:00:00.000+01:00",
          endAt: "2024-10-24T00:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648763",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "Mike and Jersey trip out over an Oddfellow's Lodge in Maryland, and visit one man's combination theme park, art installation and roadside attraction.",
          startAt: "2024-10-24T00:00:00.000+01:00",
          endAt: "2024-10-24T01:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648764",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "On a California dream pick, the competitive pinball-wizard Wolfe brothers meet coin-op king Dirk at his giant poultry barn turned private arcade.",
          startAt: "2024-10-24T01:00:00.000+01:00",
          endAt: "2024-10-24T02:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648765",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "Flying solo, Mike heads to the California castle home of the Great Razooly a sculptor, entrepreneur, and horror icon whose one-of-a-kind collection includes monsters, gargoyles and a custom rocket ship on the front lawn.",
          startAt: "2024-10-24T02:00:00.000+01:00",
          endAt: "2024-10-24T03:03:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648766",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Forged in Fire",
          description:
            "After facing off against a fellow champ, only one smith will remain and be tasked with making a M1917 Naval Cutlass, against either Gladiator of the Forge Jesse Hu, Superchamp Collin Sage, or Undefeated Judge Ben Abbott.",
          startAt: "2024-10-24T03:03:00.000+01:00",
          endAt: "2024-10-24T04:03:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648767",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "On a small-town main street in Indiana, Mike picks through a time-capsule drugstore with an attic full of apothecary relics that are all up for grabs; down the road in West Virginia, Robbie and Jersey visit a family farm from the 1800s.",
          startAt: "2024-10-24T04:03:00.000+01:00",
          endAt: "2024-10-24T05:03:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648768",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "Flying solo, Mike heads to the California castle home of the Great Razooly a sculptor, entrepreneur, and horror icon whose one-of-a-kind collection includes monsters, gargoyles and a custom rocket ship on the front lawn.",
          startAt: "2024-10-24T05:03:00.000+01:00",
          endAt: "2024-10-24T06:05:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648769",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "On a California dream pick, the competitive pinball-wizard Wolfe brothers meet coin-op king Dirk at his giant poultry barn turned private arcade.",
          startAt: "2024-10-24T06:05:00.000+01:00",
          endAt: "2024-10-24T07:04:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648770",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "American Pickers",
          description:
            "On a small-town main street in Indiana, Mike picks through a time-capsule drugstore with an attic full of apothecary relics that are all up for grabs; down the road in West Virginia, Robbie and Jersey visit a family farm from the 1800s.",
          startAt: "2024-10-24T07:04:00.000+01:00",
          endAt: "2024-10-24T08:03:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648771",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Forged in Fire",
          description:
            "After facing off against a fellow champ, only one smith will remain and be tasked with making a M1917 Naval Cutlass, against either Gladiator of the Forge Jesse Hu, Superchamp Collin Sage, or Undefeated Judge Ben Abbott.",
          startAt: "2024-10-24T08:03:00.000+01:00",
          endAt: "2024-10-24T09:01:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648772",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "One Day, One Bathroom: Quality Remodeling With FREE Installation!",
          description:
            "Trusted brand Jacuzzi and renowned interior designer, Christina Hall, share their secrets on how you can easily and affordably transform your bathroom into a gorgeous custom, safe and stylish space in 1 day! Call now for a FREE quote &amp; installation!",
          startAt: "2024-10-24T09:01:00.000+01:00",
          endAt: "2024-10-24T09:30:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648773",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Who Has Access to Your Personal Data?",
          description:
            "Even if YOU do everything right to protect yourself, company and institutional data breaches are out of your control. Nearly 1 out of 4 US consumers have been a victim of identity theft. Find out how LifeLock can help protect your identity.",
          startAt: "2024-10-24T09:30:00.000+01:00",
          endAt: "2024-10-24T10:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5648774",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Inogen Portable Oxygen - No More Tanks!",
          description:
            "Regain independence and enjoy greater mobility with the compact design and long-lasting battery of portable oxygen.",
          startAt: "2024-10-24T10:00:00.000+01:00",
          endAt: "2024-10-24T10:30:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782812",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Amazing Facts With Doug Batchelor",
          description:
            "Pastor Doug Batchelor reveals facts about biblical events and brings new insight to frequently asked questions in Christian faith.",
          startAt: "2024-10-24T11:00:00.000+01:00",
          endAt: "2024-10-24T11:30:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782813",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "David Jeremiah",
          description:
            "Dr. David Jeremiah's goal is to deliver the unchanging Word of God to an ever-changing world.",
          startAt: "2024-10-24T11:30:00.000+01:00",
          endAt: "2024-10-24T12:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782814",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            'The guys are presented with a highly collectible Smith &amp; Wesson gun out there; Chum and the Old Man look at a collection of "Teenage Mutant Ninja Turtles" comics; a seller brings in a collection of custom taxidermy pieces.',
          startAt: "2024-10-24T12:00:00.000+01:00",
          endAt: "2024-10-24T12:30:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782815",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            'A Colt Paterson revolver is brought into the shop; the Old Man relives the glory days when a 1955 GMC truck is driven in; a guy brings in an animation cell from "Tennessee Tuxedo and His Tales.".',
          startAt: "2024-10-24T12:30:00.000+01:00",
          endAt: "2024-10-24T13:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782816",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            "A guy brings in a Wesson over-and-under pistol; a 19th-century pocket watch is brought into the shop; a collection of Boeing aviation memorabilia is brought in.",
          startAt: "2024-10-24T13:00:00.000+01:00",
          endAt: "2024-10-24T13:30:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782817",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            "A World Series ring from the 1995 Atlanta Braves is brought into the shop; a Sho-Bud steel guitar is brought in; a guy brings in an oilcan used for fueling a 19th-century lighthouse lamp.",
          startAt: "2024-10-24T13:30:00.000+01:00",
          endAt: "2024-10-24T14:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782818",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            'A prop taxi from "Free Jack"; a San Francisco Giants uniform owned by Willie Mays; brass hand cannon.',
          startAt: "2024-10-24T14:00:00.000+01:00",
          endAt: "2024-10-24T14:30:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782819",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            "An autographed Dwight D. Eisenhower memoir; Remington new model Army; food bags made for Apollo 11; a 1970 bottle of Pétrus Pomerol wine.",
          startAt: "2024-10-24T14:30:00.000+01:00",
          endAt: "2024-10-24T15:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782820",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            "D.B. Cooper currency; a foot soldier's Civil War sword; Tony Curtis paintings; an original newsroom teletype reporting the Kennedy assassination.",
          startAt: "2024-10-24T15:00:00.000+01:00",
          endAt: "2024-10-24T15:30:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782821",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            'A book signed by "Shoeless" Joe Jackson; Savage Navy pistol; Moonman statue from the MTV Video Music Awards.',
          startAt: "2024-10-24T15:30:00.000+01:00",
          endAt: "2024-10-24T16:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782822",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            "The guys check out a fork from the wreckage of the Hindenburg; Old Man and Chum are offered a high-caliber Winchester rifle; Rick and the Old Man check out a 1958 Packard Baker.",
          startAt: "2024-10-24T16:00:00.000+01:00",
          endAt: "2024-10-24T16:30:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782823",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            "The guys prepare a surprise for Chumlee's 30th birthday; a guy brings in a set of statue molds; Rick and Chumlee look at an Identi-Kit used by police to make eyewitness sketches of criminal suspects.",
          startAt: "2024-10-24T16:30:00.000+01:00",
          endAt: "2024-10-24T17:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782824",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            "Rick Dale steps in to help Corey and Chumlee vie for a shot at love by restoring an antique game from the 1900s; Rick sets his sights on a never-before-seen map from the Battle of Gettysburg.",
          startAt: "2024-10-24T17:00:00.000+01:00",
          endAt: "2024-10-24T18:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782825",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            "The shop is officially in session when excerpts from the first Continental Congress make their way in.",
          startAt: "2024-10-24T18:00:00.000+01:00",
          endAt: "2024-10-24T19:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782826",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            "Corey and Chumlee spend the day in the sand testing an old-school 1960s dune buggy; Rick jives with the Jackson Five when an original autograph makes its way into the shop; props from Jerry Maguire storm in.",
          startAt: "2024-10-24T19:00:00.000+01:00",
          endAt: "2024-10-24T20:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782827",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            "Seller brings in an antique key gun that has a mystery to unlock; a Pink Floyd album; 1600s blade.",
          startAt: "2024-10-24T20:00:00.000+01:00",
          endAt: "2024-10-24T21:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782828",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            "Rick and Chum get a relatively genius package containing letters signed by Albert Einstein; they might figure out a deal; Chum and Corey marvel at replicas of Thor's helmet and hammer; an antique game shuffles into the shop.",
          startAt: "2024-10-24T21:00:00.000+01:00",
          endAt: "2024-10-24T22:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782829",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            "Chum gets into the teen spirit when a unique piece of Kurt Cobain memorabilia comes into the shop; Rick takes a swing at a 1996 Atlanta Braves National League Championship ring; a customer comes in with a Jurassic Park pog collection.",
          startAt: "2024-10-24T22:00:00.000+01:00",
          endAt: "2024-10-24T23:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782830",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            'Things in the shop get lit when Corey checks out a Jason Aldean neon light; Rick has a hoot when he checks out a ceramic owl vase made by Pablo Picasso; a poster from the Beatles\' "Yellow Submarine" movie lands on the counter.',
          startAt: "2024-10-24T23:00:00.000+01:00",
          endAt: "2024-10-25T00:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782831",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Pawn Stars",
          description:
            'Rick and Chum show off their pearly whites when a seller brings in a pair of Tyrannosaur teeth; Corey goes to bat for a signed Mark Buerhle jersey; a set of "M*A*S*H" action figures is on Rick\'s radar.',
          startAt: "2024-10-25T00:00:00.000+01:00",
          endAt: "2024-10-25T01:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782832",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Mountain Men",
          description:
            "Lauro travels north of the Arctic Circle with his team of sled dogs to hunt caribou; Daniel rebuilds an oldfloating cabin using driftwood logs and the power of tides; Jake takes out a coyote that threatens the livestock on a remote ranch.",
          startAt: "2024-10-25T01:00:00.000+01:00",
          endAt: "2024-10-25T02:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782833",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Mountain Men",
          description:
            "Lauro hunts caribou in white-out conditions on Alaska's North Slope; Bret and Ivy, buried under heavy snowfall, push to set their 230-mile trapline; Daniel launches from his floating cabin to hunt deer along the rugged coast.",
          startAt: "2024-10-25T02:00:00.000+01:00",
          endAt: "2024-10-25T03:35:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782837",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Mountain Men",
          description:
            "Lauro hunts caribou in white-out conditions on Alaska's North Slope; Bret and Ivy, buried under heavy snowfall, push to set their 230-mile trapline; Daniel launches from his floating cabin to hunt deer along the rugged coast.",
          startAt: "2024-10-25T07:35:00.000+01:00",
          endAt: "2024-10-25T09:01:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782838",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Rare Silver Morgans",
          description:
            "Add the Set of 20 Colossal Morgan Silver Dollars in Brilliant Uncirculated condition to your numismatic collection today. With only about 1% of all Morgan Dollars grading in uncirculated condition, examples like these are Condition Rarities.",
          startAt: "2024-10-25T09:01:00.000+01:00",
          endAt: "2024-10-25T09:31:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782839",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Rare Silver Morgans",
          description:
            "Add the Set of 20 Colossal Morgan Silver Dollars in Brilliant Uncirculated condition to your numismatic collection today. With only about 1% of all Morgan Dollars grading in uncirculated condition, examples like these are Condition Rarities.",
          startAt: "2024-10-25T09:31:00.000+01:00",
          endAt: "2024-10-25T10:01:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782840",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Silver Silver Peace",
          description:
            "Add the Set of 10 or 20 Silver Peace Dollars in Brilliant Uncirculated condition to your collection. Boasting a magnificent design by Anthony De Francisci, this Silver Dollar celebrated the restoration of peace after World War I had concluded.",
          startAt: "2024-10-25T10:01:00.000+01:00",
          endAt: "2024-10-25T10:31:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782841",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Silver Silver Peace",
          description:
            "Add the Set of 10 or 20 Silver Peace Dollars in Brilliant Uncirculated condition to your collection. Boasting a magnificent design by Anthony De Francisci, this Silver Dollar celebrated the restoration of peace after World War I had concluded.",
          startAt: "2024-10-25T10:31:00.000+01:00",
          endAt: "2024-10-25T11:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782843",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "David Jeremiah",
          description:
            "Dr. David Jeremiah's goal is to deliver the unchanging Word of God to an ever-changing world.",
          startAt: "2024-10-25T11:30:00.000+01:00",
          endAt: "2024-10-25T12:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782845",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The Proof Is Out There",
          description:
            "A man believes he recorded Bigfoot calls on video while foraging for mushrooms; rock paintings are discovered in India.",
          startAt: "2024-10-25T12:30:00.000+01:00",
          endAt: "2024-10-25T13:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782846",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The Proof Is Out There",
          description:
            "A witch's broomstick floating in midair; UFOs using volcanoes as hidden bases of operations; fossilized footprints found in Texas; what caused gelatinous blobs of rain to fall from the sky.",
          startAt: "2024-10-25T13:00:00.000+01:00",
          endAt: "2024-10-25T14:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782847",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The Proof Is Out There",
          description:
            "Whether ISS images signify an imminent alien invasion; whether kayakers encounter a lake monster in Washington or something worse; whether rats are joining forces to create a super rat collective; Tony Harris and his team dive into these claims.",
          startAt: "2024-10-25T14:00:00.000+01:00",
          endAt: "2024-10-25T15:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782848",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The Proof Is Out There",
          description:
            "Reports of a dinosaur living in the African Congo, strange lights above the Hessdalen Valley in Norway, a 12-year-old girl in Russia with superhuman strength, and proof of an alien structure on an asteroid.",
          startAt: "2024-10-25T15:00:00.000+01:00",
          endAt: "2024-10-25T16:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782849",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "Can humans predict the future by use of prophets and dreams, if so, can humankind harness this knowledge to avoid future deadly events.",
          startAt: "2024-10-25T16:00:00.000+01:00",
          endAt: "2024-10-25T17:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782850",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "Through records in historical texts, oral tradition and folklore, exploring how a once-thriving community becomes a lost city; what secrets found in the ruins reveal about human history.",
          startAt: "2024-10-25T17:00:00.000+01:00",
          endAt: "2024-10-25T18:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782851",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "Examining some of the most devastating plagues in human history, as well the scientific advances to combat these diseases, including the development of Edward Jenner's vaccine for smallpox in the 1790s.",
          startAt: "2024-10-25T18:00:00.000+01:00",
          endAt: "2024-10-25T19:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782852",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "For more than 200 years, treasure hunters have been coming to Oak Island in search of a treasure that has so far eluded them all, and has even cost six men their lives, could it be, as legend suggests, the treasure is protected by a deadly curse.",
          startAt: "2024-10-25T19:00:00.000+01:00",
          endAt: "2024-10-25T20:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782853",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "Whether the ancients had scientific knowledge lost to time; how and why they fashioned remarkable feats of engineering.",
          startAt: "2024-10-25T20:00:00.000+01:00",
          endAt: "2024-10-25T21:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782854",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description: "Examining what motivates someone to steal.",
          startAt: "2024-10-25T21:00:00.000+01:00",
          endAt: "2024-10-25T22:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782855",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "Since the dawn of civilization, humanity has been fixated on predicting our own demise.",
          startAt: "2024-10-25T22:00:00.000+01:00",
          endAt: "2024-10-25T23:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782856",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "A house that narrowly dodges the path of a tornado; rain that falls from the sky like blood; lightning that follows into the home.",
          startAt: "2024-10-25T23:00:00.000+01:00",
          endAt: "2024-10-26T00:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782857",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "A look at the visions of mystics, prophets and clairvoyants throughout history, what their prophecies reveal and predictions for the future.",
          startAt: "2024-10-26T00:00:00.000+01:00",
          endAt: "2024-10-26T01:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782858",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "People go missing every day, but throughout history, there have been strange and eerie disappearances that continue to capture the world's attention.",
          startAt: "2024-10-26T01:00:00.000+01:00",
          endAt: "2024-10-26T02:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782859",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "While modern science has stopped many dangerous viruses and bacteria in their tracks, there is a growing concern that contagious germs could be traveling through the deadly vacuum of space.",
          startAt: "2024-10-26T02:00:00.000+01:00",
          endAt: "2024-10-26T03:03:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782860",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The Proof Is Out There",
          description:
            "Newly found footage from the 1970s may be proof that sasquatch is living in the swamps of Louisiana; the recent trend in flying sphere sightings; a seemingly giant and horrifying creature captured on video, seen attacking and devouring a shark.",
          startAt: "2024-10-26T03:03:00.000+01:00",
          endAt: "2024-10-26T04:05:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782861",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "As a new era of exploration of the Red Planet begins, the Red Planet's mysteries might be close to getting solved; ancient cataclysms are believed to have left Mars barren, but science continues to find clues that this red planet was once blue.",
          startAt: "2024-10-26T04:05:00.000+01:00",
          endAt: "2024-10-26T05:03:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782862",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "While modern science has stopped many dangerous viruses and bacteria in their tracks, there is a growing concern that contagious germs could be traveling through the deadly vacuum of space.",
          startAt: "2024-10-26T05:03:00.000+01:00",
          endAt: "2024-10-26T06:05:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782863",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "People go missing every day, but throughout history, there have been strange and eerie disappearances that continue to capture the world's attention.",
          startAt: "2024-10-26T06:05:00.000+01:00",
          endAt: "2024-10-26T07:04:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782864",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "As a new era of exploration of the Red Planet begins, the Red Planet's mysteries might be close to getting solved; ancient cataclysms are believed to have left Mars barren, but science continues to find clues that this red planet was once blue.",
          startAt: "2024-10-26T07:04:00.000+01:00",
          endAt: "2024-10-26T08:01:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782865",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The Proof Is Out There",
          description:
            "Newly found footage from the 1970s may be proof that sasquatch is living in the swamps of Louisiana; the recent trend in flying sphere sightings; a seemingly giant and horrifying creature captured on video, seen attacking and devouring a shark.",
          startAt: "2024-10-26T08:01:00.000+01:00",
          endAt: "2024-10-26T09:01:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583714",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Ancient Aliens",
          description:
            "For thousands of years, people have held the belief that everyday objects can possess hidden energy; talismans are seen to provide protection, good fortune, and some are thought to embody a higher power.",
          startAt: "2024-10-22T00:00:00.000+01:00",
          endAt: "2024-10-22T01:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583715",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Ancient Aliens",
          description:
            "For thousands of years, cultures around the world have held a belief in stargates through which beings have traveled to Earth from distant points in the universe and even other dimensions.",
          startAt: "2024-10-22T01:00:00.000+01:00",
          endAt: "2024-10-22T02:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583716",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Ancient Aliens: Origins",
          description:
            "Ancient Astronaut theorists propose that descriptions of sky gods and star beings might reflect real encounters with extraterrestrial visitors in the remote past.",
          startAt: "2024-10-22T02:00:00.000+01:00",
          endAt: "2024-10-22T04:05:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583717",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Ancient Aliens",
          description:
            "Stories of god-like beings providing instruction to early humans, helping establish the first civilizations; exploring if mysterious figures who appear throughout history provide evidence that these otherworldly teachers have been here all along.",
          startAt: "2024-10-22T04:05:00.000+01:00",
          endAt: "2024-10-22T05:03:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583718",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Ancient Aliens: Origins",
          description:
            "Ancient Astronaut theorists propose that descriptions of sky gods and star beings might reflect real encounters with extraterrestrial visitors in the remote past.",
          startAt: "2024-10-22T05:03:00.000+01:00",
          endAt: "2024-10-22T07:06:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583719",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Ancient Aliens",
          description:
            "For thousands of years, cultures around the world have held a belief in stargates through which beings have traveled to Earth from distant points in the universe and even other dimensions.",
          startAt: "2024-10-22T07:06:00.000+01:00",
          endAt: "2024-10-22T08:05:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583720",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Ancient Aliens",
          description:
            "Stories of god-like beings providing instruction to early humans, helping establish the first civilizations; exploring if mysterious figures who appear throughout history provide evidence that these otherworldly teachers have been here all along.",
          startAt: "2024-10-22T08:05:00.000+01:00",
          endAt: "2024-10-22T09:01:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583721",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: '"Trump: Make Money Online"',
          description:
            "John Crestani's tips on legitimate work-from-home business opportunities as well as scams to avoid.",
          startAt: "2024-10-22T09:01:00.000+01:00",
          endAt: "2024-10-22T09:31:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583722",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Inogen Portable Oxygen - No More Tanks!",
          description:
            "Regain independence and enjoy greater mobility with the compact design and long-lasting battery of portable oxygen.",
          startAt: "2024-10-22T09:31:00.000+01:00",
          endAt: "2024-10-22T10:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583723",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Who Has Access to Your Personal Data?",
          description:
            "Even if YOU do everything right to protect yourself, company and institutional data breaches are out of your control. Nearly 1 out of 4 US consumers have been a victim of identity theft. Find out how LifeLock can help protect your identity.",
          startAt: "2024-10-22T10:00:00.000+01:00",
          endAt: "2024-10-22T10:30:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583724",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Paid Programming",
          description: "Paid programming.",
          startAt: "2024-10-22T10:30:00.000+01:00",
          endAt: "2024-10-22T11:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583725",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Amazing Facts With Doug Batchelor",
          description:
            "Pastor Doug Batchelor reveals facts about biblical events and brings new insight to frequently asked questions in Christian faith.",
          startAt: "2024-10-22T11:00:00.000+01:00",
          endAt: "2024-10-22T11:30:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583726",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "David Jeremiah",
          description:
            "Dr. David Jeremiah's goal is to deliver the unchanging Word of God to an ever-changing world.",
          startAt: "2024-10-22T11:30:00.000+01:00",
          endAt: "2024-10-22T12:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583727",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "History's Greatest Mysteries",
          description:
            "On February 24, 1942, less than three months after the Japanese bombed Pearl Harbor, military radar picks up what appears to be enemy aircraft over Los Angeles.",
          startAt: "2024-10-22T12:00:00.000+01:00",
          endAt: "2024-10-22T13:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583728",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "History's Greatest Mysteries",
          description:
            "Despite centuries of sightings and searches, one deep-sea monster remains unidentified; as evidence continues to mount, the mystery endures as to whether the Loch Ness monster exists.",
          startAt: "2024-10-22T13:00:00.000+01:00",
          endAt: "2024-10-22T14:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583729",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "History's Greatest Mysteries",
          description:
            "During World War Two, the Nazis stole vast amounts of art, gold, silver and currency, and stashed it across Europe; while some of the plunder has been recovered, much more is still missing nearly 80 years later.",
          startAt: "2024-10-22T14:00:00.000+01:00",
          endAt: "2024-10-22T15:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583730",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "History's Greatest Mysteries",
          description:
            "A spree of gruesome murders by Jack the Ripper shocks Victorian England -- and the world; the homicidal maniac's identity still remains a mystery.",
          startAt: "2024-10-22T15:00:00.000+01:00",
          endAt: "2024-10-22T16:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583731",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "History's Greatest Mysteries",
          description:
            "The story of the most celebrated warrior king in history still stirs fascination more than 2000 years after his death.",
          startAt: "2024-10-22T16:00:00.000+01:00",
          endAt: "2024-10-22T17:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583732",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "History's Greatest Mysteries",
          description:
            "After a series of dark and ominous events, an unassuming family home on Long Island becomes the most notorious house in America; 50 years later, it's spawned a title wave of books, documentaries, and films.",
          startAt: "2024-10-22T17:00:00.000+01:00",
          endAt: "2024-10-22T18:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583733",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "History's Greatest Mysteries",
          description:
            "It's one of the most famous prehistoric monuments on Earth -- a mysterious arrangement of stones that have adorned the English countryside for millennia; nobody knows how the landmark was built or why.",
          startAt: "2024-10-22T18:00:00.000+01:00",
          endAt: "2024-10-22T19:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583734",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "History's Greatest Mysteries",
          description:
            "A perfectly masterminded plot leads to one of the most brazen prison breaks in American history; with only a handful of clues left behind, the search for the infamous Alcatraz escapees continues to this day.",
          startAt: "2024-10-22T19:00:00.000+01:00",
          endAt: "2024-10-22T20:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583735",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "History's Greatest Mysteries",
          description:
            "The Titanic's tragic story captures the imagination of the public and experts of all kinds, who, decades after the ship's demise, still seek answers; a look into new evidence that might reveal more about how and why the Titanic sank.",
          startAt: "2024-10-22T20:00:00.000+01:00",
          endAt: "2024-10-22T21:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583736",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained Special Presentation",
          description:
            "Uncovering the secrets behind ancient cultures and civilizations such as the Mayan empire, the Khmer people at Angkor Wat and the Roman city of Pompeii.",
          startAt: "2024-10-22T21:00:00.000+01:00",
          endAt: "2024-10-22T22:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583737",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained Special Presentation",
          description:
            "An investigation into what drives certain people to deceive and execute outrageous and daring plots; a look into how some elaborate crimes, from elusive imposters disguised as foreign doctors or socialites, to dangerous killers.",
          startAt: "2024-10-22T22:00:00.000+01:00",
          endAt: "2024-10-22T23:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583738",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained Special Presentation",
          description:
            "Discussing whether genius is born or made; whether or not clues can be found by examining the brains of extraordinary thinkers like Albert Einstein.",
          startAt: "2024-10-22T23:00:00.000+01:00",
          endAt: "2024-10-23T00:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583739",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained Special Presentation",
          description:
            "World War II was a large and deadly conflict; from 1939 until 1945, more than fifty nations engaged in harrowing combat, and while the Axis Powers were eventually defeated, plenty of mysteries emerged from the rubble.",
          startAt: "2024-10-23T00:00:00.000+01:00",
          endAt: "2024-10-23T01:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583740",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained Special Presentation",
          description:
            "Deep within the recesses of the US government archives are secrets that will never see the light of day; but thanks to eyewitness encounters and devoted research many odd events are being uncovered and re-examined.",
          startAt: "2024-10-23T01:00:00.000+01:00",
          endAt: "2024-10-23T02:00:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583741",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained Special Presentation",
          description:
            "The fascination with lost treasures has captured mankind's curiosity for centuries, and new evidence and research have led many across the globe in the quest for vast riches.",
          startAt: "2024-10-23T02:00:00.000+01:00",
          endAt: "2024-10-23T03:03:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583742",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained Special Presentation",
          description:
            "Believers have researched texts and studied histories throughout centuries, not only to strengthen their faith, but to find deeper meanings and profound answers to existence itself.",
          startAt: "2024-10-23T03:03:00.000+01:00",
          endAt: "2024-10-23T04:05:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583743",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The UnXplained",
          description:
            "Many believe it to be the Word of God, but others claim it contains inconsistencies and contradictions that could only be manmade.",
          startAt: "2024-10-23T04:05:00.000+01:00",
          endAt: "2024-10-23T05:03:00.000+01:00",
          createdAt: "2024-10-22T03:05:01.982+01:00",
          updatedAt: "2024-10-22T03:05:01.982+01:00",
        },
      },
      {
        type: "programmes",
        id: "5583749",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "DraftKings Sportsbook Report",
          description: "DraftKings Sportsbook, a top-rated sportsbook app!",
          startAt: "2024-10-23T09:30:00.000+01:00",
          endAt: "2024-10-23T10:30:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782811",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Paid Programming",
          description: "Paid programming.",
          startAt: "2024-10-24T10:30:00.000+01:00",
          endAt: "2024-10-24T11:00:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782834",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Mountain Men",
          description:
            "Lauro hunts caribou in white-out conditions on Alaska's North Slope; Bret and Ivy, buried under heavy snowfall, push to set their 230-mile trapline; Daniel launches from his floating cabin to hunt deer along the rugged coast.",
          startAt: "2024-10-25T03:35:00.000+01:00",
          endAt: "2024-10-25T05:03:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782835",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Mountain Men",
          description:
            "Lauro travels north of the Arctic Circle with his team of sled dogs to hunt caribou; Daniel rebuilds an oldfloating cabin using driftwood logs and the power of tides; Jake takes out a coyote that threatens the livestock on a remote ranch.",
          startAt: "2024-10-25T05:03:00.000+01:00",
          endAt: "2024-10-25T06:02:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782836",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Mountain Men",
          description:
            "Lauro hunts caribou in white-out conditions on Alaska's North Slope; Bret and Ivy, buried under heavy snowfall, push to set their 230-mile trapline; Daniel launches from his floating cabin to hunt deer along the rugged coast.",
          startAt: "2024-10-25T06:02:00.000+01:00",
          endAt: "2024-10-25T07:35:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782842",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "Amazing Facts With Doug Batchelor",
          description:
            "Pastor Doug Batchelor reveals facts about biblical events and brings new insight to frequently asked questions in Christian faith.",
          startAt: "2024-10-25T11:00:00.000+01:00",
          endAt: "2024-10-25T11:30:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
      {
        type: "programmes",
        id: "5782844",
        attributes: {
          channelId: "1",
          channelEpgId: "aande.us",
          xmltvSourceId: null,
          name: "The Proof Is Out There",
          description:
            "A UFO spotted by multiple residents of a Florida town; the cause of a ghoulish moaning sound from the sky; a dragon could have been responsible for a bizarre incident in China.",
          startAt: "2024-10-25T12:00:00.000+01:00",
          endAt: "2024-10-25T12:30:00.000+01:00",
          createdAt: "2024-10-24T03:05:02.404+01:00",
          updatedAt: "2024-10-24T03:05:02.404+01:00",
        },
      },
    ],
  };
});

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
