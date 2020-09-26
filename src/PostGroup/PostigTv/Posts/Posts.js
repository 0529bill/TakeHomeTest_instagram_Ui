import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Post from "../Post/Post";

function Posts() {
  //fake ig data
  const data = [
    {
      id: 1,
      url:
        "https://instagram.ftpe7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82478186_215492956263647_3489359051248384306_n.jpg?_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5lajl6szz7YAX-rv831&oh=955610831bfb42f30025f991ea9f0d43&oe=5F937CC6",
    },
    {
      id: 2,
      url:
        "https://instagram.ftpe7-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/99425009_598946914050746_7189594315840495427_n.jpg?_nc_ht=instagram.ftpe7-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=fiqO0R1l37UAX_NB-x3&oh=44e70cfae9a7b8a4d0cff9672e9941c9&oe=5F9482B3",
    },
    {
      id: 3,
      url:
        "https://instagram.ftpe7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/91250627_506621186893408_4036125097007535490_n.jpg?_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=q5gtBVQfuZIAX85y4q7&oh=65358ac6272cd70bb3649e1520efa8c2&oe=5F939F15",
    },
    {
      id: 4,
      url:
        "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/81935626_664908454339554_7574636986195636628_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=EFEDgTU1FmAAX_U1o_g&oh=ee80c754f4e783937f080bcb804383e3&oe=5F934613",
    },
    {
      id: 5,
      url:
        "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/102886079_627850198075326_5383371663484290308_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=f-dHrmJDUlEAX86_o-o&oh=77e1d8943a0cfb6272c75dd061d5704f&oe=5F944118",
    },
    {
      id: 6,
      url:
        "https://instagram.ftpe7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/80010575_638723226898612_424706135513433862_n.jpg?_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=7riwBKd3cEsAX8wM1Pw&oh=fb39e038c8bdb51381bbf8357e464623&oe=5F9454D7",
    },
    {
      id: 7,
      url:
        "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/81935626_664908454339554_7574636986195636628_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=EFEDgTU1FmAAX_U1o_g&oh=ee80c754f4e783937f080bcb804383e3&oe=5F934613",
    },
    {
      id: 8,
      url:
        "https://instagram.ftpe7-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/75467473_1510178662464122_778678791014228907_n.jpg?_nc_ht=instagram.ftpe7-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=hh1aGgWPRs4AX_QsJSs&oh=384180fa740c7f7402af37952dda896e&oe=5F94DD45",
    },
    {
      id: 9,
      url:
        "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/81935626_664908454339554_7574636986195636628_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=EFEDgTU1FmAAX_U1o_g&oh=ee80c754f4e783937f080bcb804383e3&oe=5F934613",
    },
    {
      id: 10,
      url:
        "https://instagram.ftpe7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82478186_215492956263647_3489359051248384306_n.jpg?_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5lajl6szz7YAX-rv831&oh=955610831bfb42f30025f991ea9f0d43&oe=5F937CC6",
    },
    {
      id: 11,
      url:
        "https://instagram.ftpe7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82478186_215492956263647_3489359051248384306_n.jpg?_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5lajl6szz7YAX-rv831&oh=955610831bfb42f30025f991ea9f0d43&oe=5F937CC6",
    },
    {
      id: 12,
      url:
        "https://instagram.ftpe7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82478186_215492956263647_3489359051248384306_n.jpg?_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5lajl6szz7YAX-rv831&oh=955610831bfb42f30025f991ea9f0d43&oe=5F937CC6",
    },
    {
      id: 13,
      url:
        "https://instagram.ftpe7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82478186_215492956263647_3489359051248384306_n.jpg?_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5lajl6szz7YAX-rv831&oh=955610831bfb42f30025f991ea9f0d43&oe=5F937CC6",
    },
    {
      id: 14,
      url:
        "https://instagram.ftpe7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82478186_215492956263647_3489359051248384306_n.jpg?_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5lajl6szz7YAX-rv831&oh=955610831bfb42f30025f991ea9f0d43&oe=5F937CC6",
    },
    {
      id: 15,
      url:
        "https://instagram.ftpe7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82478186_215492956263647_3489359051248384306_n.jpg?_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5lajl6szz7YAX-rv831&oh=955610831bfb42f30025f991ea9f0d43&oe=5F937CC6",
    },
    {
      id: 16,
      url:
        "https://instagram.ftpe7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82478186_215492956263647_3489359051248384306_n.jpg?_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5lajl6szz7YAX-rv831&oh=955610831bfb42f30025f991ea9f0d43&oe=5F937CC6",
    },
    {
      id: 17,
      url:
        "https://instagram.ftpe7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82478186_215492956263647_3489359051248384306_n.jpg?_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5lajl6szz7YAX-rv831&oh=955610831bfb42f30025f991ea9f0d43&oe=5F937CC6",
    },
    {
      id: 18,
      url:
        "https://instagram.ftpe7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/82478186_215492956263647_3489359051248384306_n.jpg?_nc_ht=instagram.ftpe7-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5lajl6szz7YAX-rv831&oh=955610831bfb42f30025f991ea9f0d43&oe=5F937CC6",
    },
  ];

  const [postToShow, setPostToShow] = useState([]);
  const [order, setOrder] = useState(0);
  const postLimit = 9;

  useEffect(() => {
    let initialData = data.slice(0, postLimit);

    setOrder(9);
    setPostToShow(initialData);
  }, []);

  let sendNewData = () => {
    let datas = data.slice(order, order + postLimit);

    let newDatas = [...postToShow, ...datas];
    setPostToShow(newDatas);
  };

  return (
    <>
      <Post post={postToShow} />
      <div className="text-center mt-3 mb-3">
        <Button onClick={sendNewData} variant="outline-secondary">
          Load More...
        </Button>
      </div>
    </>
  );
}

export default Posts;
