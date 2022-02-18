const quotesData = [
  {
    quote: ` Design is a conscious and intuitive effort to impose meaningful order. Design is both the underlying matrix of order and the tool that creates it.`,
    author: 'Victor Papanek',
  },

  {
    quote: ` Nothing in life is as important as you think it is, while you are thinking about it.`,
    author: 'Daniel Kahneman',
  },
  {
    quote: ` You cannot stay on the summit forever; you have to come down again. So why bother in the first place? Just this: What is above knows what is below, but what is below does not know what is above. One climbs, one sees. One descends, one sees no longer, but one has seen. There is an art of conducting oneself in the lower regions by the memory of what one saw higher up. When one can no longer see, one can at least still know.`,
    author: 'Rene Daumal',
  },
  {
    quote: ` I am dead because I lack desire,  
    I lack desire because I think I possess,  
    I think I possess because I do not try to give,  
    In trying to give, you see that you have nothing,  
    Seeing that you have nothing, you try to give of yourself,  
    Trying to give of yourself, you see that you are nothing,  
    Seeing that you are nothing, you desire to become,  
    In desiring to become, you begin to live.`,
    author: 'Rene Daumal',
  },
  {
    quote: `Life is my paint, death is my canvas.`,
    author: ' Skeksis from The Dark Crystal:Age of Resistance',
  },
  {
    quote: `We had six different business plan changes. The last one was PayPal.`,
    author: 'Max Levchin',
  },
  {
    quote: `If you have invented something new but you haven’t invented an effective way to sell it, you have a bad business – no matter how good the product.`,
    author: ' Peter Thiel',
  },
  {
    quote: `The first ten people will determine whether the company succeeds or not.`,
    author: ' Steve Jobs',
  },
  {
    quote: `No environment can strongly affect a person unless it is strongly interactive. To be interactive, the environment must be responsive, that is, must provide relevant feedback to the learner. For the feedback to be relevant, it must meet the learner _where he is_, then program (that is, change in appropriate steps at appropriate times) as he changes. The learner changes (that is, is educated) through his responses to his environment.`,
    author: ' George B. Leonard',
  },
  {
    quote: `Perfection of character: to live your last day, every day, without frenzy, or sloth, or pretense.`,
    author: ' Marcus Aurelius',
  },
  {
    quote: `True happiness is to enjoy the present, without anxious dependence upon the future, not to amuse ourselves with either hopes or fears but to rest satisfied with what we have, which is sufficient, for he that is so wants nothing. The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not. `,
    author: ' Lucius Annaeus Seneca',
  },
  { quote: ` Try, not try; be like the sky.`, author: ' Alma from Undone' },
  {
    quote: ` Quand on est au sommet  
     On ne peut que descendre  
     Ou apprendre à voler`,
    author: ' Au-delà Du Brouillard, Damien Saez',
  },
  {
    quote: ` It is not knowledge, but the act of learning which grants the greatest enjoyment. When I have clarified and exhausted a subject, then I turn away from it, in order to go into darkness again.`,
    author: ' Carl Friedrich Gauss',
  },
  {
    quote: ` The sense of danger must not disappear:  
    The way is certainly both short and steep,  
    However gradual it looks from here;  
    Look if you like, but you will have to leap.`,
    author: ' W. H. Auden',
  },
  {
    quote: ` Every business transaction has three parts: customer, product, supplier; to be successful you have to control at least 2 of the three.`,
    author: ' Unknown',
  },
  {
    quote: ` We work too hard. We try too hard. Don't try. Don't work. It's there. Looking right at us, aching to kick out of the closed womb.`,
    author: ' Charles Bukowski',
  },
  {
    quote: ` If you have to try to try, if you have to try to care about something or have to try to want something, perhaps you don't care about it, and perhaps you don't want it. If the thought of not doing the thing hurts more than the thought of potentially suffering through the process, if the thought of a life without it or never having tried it at all terrifies you, if it comes to you, through you, out of you, almost as if you're not trying, perhaps Bukowski might say here, try, and 'if you're going to try, go all the way'.`,
    author: ' From the Pursuit of Wonder on YT',
  },
  {
    quote: ` Only add as much structure as needed to solve your problem. Create structure and constraints on demand in response to a real need.`,
    author: ' AT',
  },
  {
    quote: ` We should do away with the absolutely specious notion that everybody has to earn a living. It is a fact today that one in ten thousand of us can make a technological breakthrough capable of supporting all the rest.The youth of today are absolutely right in recognizing this nonsense of earning a living. We keep inventing jobs because of this false idea that everybody has to be employed at some kind of drudgery because, according to Malthusian Darwinian theory he must justify his right to exist. So we have inspectors of inspectors and people making instruments for inspectors to inspect inspectors. The true business of people should be to go back to school and think about whatever it was they were thinking about before somebody came along and told them they had to earn a living.`,
    author: ' R. Buckminster Fuller',
  },
  { quote: ` Criticism is the most effective antidote to error.`, author: ' David Brin' },
  {
    quote: `The wheel's hub holds thirty spokes  
    Utility depends on the hole through the hub.  
    The potter's clay forms a vessel.  
    It is the space within that serves.  
    A house is built with solid walls  
    The nothingness of window and door alone  
    renders it usable,  
    That which exists may be transformed  
    What is non-existent has boundless uses.`,
    author: ' Lao Tse',
  },
  {
    quote: ` A child can teach an adult three things: to be happy for no reason, to always be busy with something, and to know how to demand with all his might that which he desires.`,
    author: ' Paulo Coelho',
  },
  {
    quote: `What another would have done as well as you, do not do it. What another would have said as well as you, do not say it, written as well as you, do not write it.`,
    author: 'Andre Gide',
  },
  {
    quote: ` Err  
    and err  
    and err again  
    but less  
    and less  
    and less.  `,
    author: 'Piet Hein',
  },
  {
    quote: ` The only true measure of success is the ratio between what we might have done and what we might have been on the one hand, and the thing we have made and the things we have made of ourselves on the other.`,
    author: ' H.G.Wells',
  },
  {
    quote: ` I am a maker. I think work should be about making things work. Better. Faster. Smaller. Smarter. So I build bridges between what’s known and what’s not. I tinker. I toil. I write poetically in an abundance of languages (including code). I hack. I dissect. I have an insatiable desire to un-complicate the complicated. I am easily inspired. I believe that just because it hasn’t been thought of doesn’t mean it won’t be. Potential is my thrill ride. Imagination is my most-used tool. I am a maker, and I am what moves the world forward.`,
    author: ' Purdue University',
  },
  {
    quote: ` The union of the mathematician with the poet, Fervor with measure, Passion with correctness, That surely is the ideal.`,
    author: 'William James',
  },
]

export default quotesData
