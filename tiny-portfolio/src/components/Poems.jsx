import React, { useState } from "react";
const Poems = () => {
  const [poemClass, setPoemClass] = useState("empty-poem-container");
  const [poems] = useState([
    { poemTitle: "", poemText: "" },
    {
      poemTitle: "Kissing You",
      poemText: `The best thing about kissing you
Is how close my face gets to yours
That way, everything else disappears
And I can only see you

Kissing you like this
Just gently on the lips
It is the only time 
I am not missing you

When our lips touch
For just a split second
It is the highlight of my day,
My week, my month,
Until my lips get to touch yours again

If I am not touching you
I am missing you
There is no other state 

I start missing you the second our gaze parts
Even if I can still hear your steps walking away

When we say goodbye
My stomach wants to leave with you
Just rip its way out of my body
And leave me rotting inside
Gutless... And missing you.`,
    },
    {
      poemTitle: "Still waiting for you",
      poemText: `I still think about you every day
    I still miss you every day
    There's a dark empty spot in my heart
    Still hoping you'll come back one day
    And fill it with light
    
    One smile would be enough
    One hug would be enough
    And please, this time,
    Don't take them away`,
    },
    {
      poemTitle: "Not your friend",
      poemText: `I love you with all my heart.
    I want you to live a fulfilling life.
    I want you to be happy, I really do.
    
    But my heart is not your friend.
    
    It secretly wants you to be apart from him.
    It secretly still wants you to be mine.
    It would do anything to get away from this.
    Anything but stay away from you.`,
    },
  ]);
  const incrementCount = () => {
    if (counter >= 3) {
      setCounter(0);
      setPoemClass("empty-poem-container");
    } else {
      setPoemClass("poem-container");
      setCounter(counter + 1);
      console.log(poemClass);
    }
  };
  const [counter, setCounter] = useState(0);
  return (
    <div className={poemClass}>
      <button onClick={incrementCount}>poems</button>
      <h3 className="poem-title">{poems[counter].poemTitle}</h3>
      <p className="poem-text">{poems[counter].poemText} </p>
    </div>
  );
};
export default Poems;
