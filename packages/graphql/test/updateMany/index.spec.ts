import gql from "graphql-tag";
import dataProvider from "../../src/index";
import client from "../gqlClient";
import "./index.mock";

describe("updateMany", () => {
  it("correct response with meta", async () => {
    const { data } = await dataProvider(client).updateMany!({
      resource: "posts",
      ids: ["24", "25"],
      variables: {
        title: "updated-foo",
        content: "updated-bar",
        category: "2",
      },

      meta: {
        fields: [
          {
            operation: "post",
            fields: ["id", "title", "content", { category: ["id"] }],
            variables: {},
          },
        ],
      },
    });

    expect(data[0].id).toEqual("24");
    expect(data[0].title).toEqual("updated-foo");
    expect(data[0].content).toEqual("updated-bar");
    expect(data[0].category.id).toEqual("2");

    expect(data[1].id).toEqual("25");
    expect(data[1].title).toEqual("updated-foo");
    expect(data[1].content).toEqual("updated-bar");
    expect(data[1].category.id).toEqual("2");
  });

  it("correct response without meta", async () => {
    const { data } = await dataProvider(client).updateMany!({
      resource: "posts",
      ids: ["24", "25"],
      variables: {
        title: "updated-foo-2",
        content: "updated-bar-2",
        category: "3",
      },
    });

    expect(data[0].id).toEqual("24");
    expect(data[1].id).toEqual("25");
  });
});

describe("updateMany gql", () => {
  it("correct response", async () => {
    const { data } = await dataProvider(client).updateMany!({
      resource: "posts",
      ids: ["2121", "6223"],
      variables: {
        title: "updated-test",
        content: "updated-test",
        category: "19",
      },
      meta: {
        gqlQuery: gql`
          mutation ($ids: [ID!], $data: editPostInput!) {
            updatePost (input: { where: { id_in: $ids }, data: $data }) {
              post {
                id
                title
                content
                category {
                  id
                }
              }
            }
          }
        `,
      },
    });

    expect(data[0].id).toEqual("2121");
    expect(data[1].id).toEqual("6223");
  });
});
