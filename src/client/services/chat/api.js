// @flow strict
import v4 from "uuid/v4";

import type { Message } from "client/records/Message";

const gibMS = () => Math.random() * 2000;

export const createMessage = (text: string): Promise<Message> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id: v4(),
        text,
        from: "me",
      });
    }, gibMS());
  });

const RESPONSES = [
  "Obie Trice.",
  "Real name no gimmicks",
  "Two trailer park girls go round the outside,",
  "Round the outside, round the outside",
  "Two trailer park girls go round the outside,",
  "Round the outside, round the outside",
  "Guess who's back, back again",
  "Shady's back, tell a friend",
  "Guess who's back, guess who's back?",
  "Guess who's back, guess who's back?",
  "Guess who's back, guess who's back?",
  "Guess who's back?",
  "I've created a monster, 'cause nobody wants to see Marshall no more",
  "They want Shady, I'm chopped liver",
  "Well if you want Shady, then this is what I'll give ya",
  "A little bit of weed mixed with some hard liquor",
  "Some vodka that will jump start my heart quicker",
  "Then a shot when I get shocked at the hospital",
  "By the doctor when I'm not cooperating",
  "When I'm rocking the table while he's operating \"Hey\"",
  "You waited this long to stop debating",
  "'Cause I'm back, I'm on the rag and ovulating",
  "I know you got a job Ms. Cheney",
  "But your husband's heart problem is complicated",
  "So the F-C-C won't let me be or let me be me so let me see",
  "They tried to shut me down on M-T-V",
  "But it feels so empty without me",
  "So come on and dip, bum on your lips",
  "Fuck that, cum on your lips and some on your tits",
  "And get ready 'cause this shit is about to get heavy",
  'I just settled all my lawsuits, "Fuck you, Debbie!"',
  "Now this looks like a job for me",
  "So everybody just follow me",
  "'Cause we need a little controversy",
  "'Cause it feels so empty without me",
  "I said, this looks like a job for me",
  "So everybody just follow me",
  "'Cause we need a little controversy",
  "'Cause it feels so empty without me",
  "Little hellions kids feeling rebellious",
  "Embarrassed, their parents still listen to Elvis",
  "They start feeling like prisoners helpless",
  '\'Til someone comes along on a mission and yells "bitch"',
  "A visionary, vision is scary,",
  "Could start a revolution, pollutin' the air waves a rebel",
  "So let me just revel and bask",
  "In the fact that I got everyone kissing my ass",
  "And it's a disaster such a catastrophe",
  "For you to see so damn much of my ass you ask for me",
  "Well I'm back, nana-na na na nana-na na na kshh",
  "Fix your bent antenna, tune it in and then I'm gonna enter in endin' up",
  "Under your skin like a splinter",
  "The center of attention back for the winter",
  "I'm interesting, the best thing since wrestling",
  "Infesting in your kids ears and nesting",
  '"Testing attention please"',
  "Feel the tension soon as someone mentions me",
  "Here's my ten cents, my two cents is free",
  "A nuisance, who sent, you sent for me?",
  "Now this looks like a job for me",
  "So everybody just follow me",
  "'Cause we need a little controversy",
  "'Cause it feels so empty without me",
  "I said, this looks like a job for me",
  "So everybody just follow me",
  "'Cause we need a little controversy",
  "'Cause it feels so empty without me",
  "A-tiskit a-taskit,",
  "I go tit for tat with anybody who's talking this shit and that shit",
  "Chris Kirkpatrick, you can get your ass kicked",
  "Worse than them little Limp Bizkit bastards",
  "And Moby, you can get stomped by Obie",
  "You thirty six year old bald headed fag, blow me",
  "You don't know me, you're too old, let it go its over,",
  "Nobody listens to Techno",
  "Now lets go, just give me the signal",
  "I'll be there with a whole list full of new insults",
  "I've been dope, suspenseful with a pencil",
  "Ever since Prince turned himself into a symbol",
  "But sometimes this shit just seems",
  "Everybody only wants to discuss me",
  "So this must mean I'm disgusting",
  "But it's just me I'm just obscene",
  "Though I'm not the first king of controversy",
  "I am the worst thing since Elvis Presley",
  "To do black music so selfishly",
  "And use it to get myself wealthy",
  '"Hey" there\'s a concept that works',
  "Twenty million other white rappers emerge",
  "But no matter how many fish in the sea",
  "It will be so empty without me",
  "Now this looks like a job for me",
  "So everybody just follow me",
  "'Cause we need a little controversy",
  "'Cause it feels so empty without me",
  "I said, this looks like a job for me",
  "So everybody just follow me",
  "'Cause we need a little controversy",
  "'Cause it feels so empty without me",
];

const getResponse = () => RESPONSES[Math.ceil(Math.random() * (RESPONSES.length - 1))];

export const getMessage = (): Promise<Message> =>
  new Promise(resolve => {
    setTimeout(() => {
      const text = getResponse();

      resolve({
        id: v4(),
        text,
        from: "Durotan",
      });
    }, gibMS());
  });
