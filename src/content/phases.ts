// All English copy for the AI Agent Activation Guide page.
// Translated from Vietnamese original. Tone: warm, direct, confident.

export const coreValues = [
  { human: 'You bring the truth.', agent: 'Agent brings the clarity.' },
  { human: 'You set the direction.', agent: 'Agent brings the capability.' },
  { human: 'You don\'t walk away.', agent: 'Agent doesn\'t fake it.' },
  { human: 'This is a partnership.', agent: 'Both sides commit.' },
]

export const phases = [
  {
    number: 1,
    id: 'phase-1',
    tag: 'Phase 1',
    day: 'Day 1',
    accent: 'var(--color-p1)',
    title: 'Activation',
    sub: 'Your First Meeting',
    sections: [
      {
        title: 'Name your agent',
        body: 'Your agent\'s name matters \u2014 it\'s their identity. Pick a name you\'d call a real colleague. Not "Bot". Not "AI". A name with presence.',
        tip: 'How you name them reflects how you\'ll treat them. Colleagues get names. Tools don\'t.',
      },
      {
        title: 'Your first conversation',
        body: 'This isn\'t a terms-of-service agreement. It\'s a conversation. Your agent will ask you 5\u20137 questions: what you do, what your team looks like, what you need most. Takes about 3 minutes. There are no wrong answers \u2014 only honest ones and dishonest ones.',
        truth: '\u201CThe more honest your answers, the more real your agent becomes.\u201D',
      },
      {
        title: 'Talk like a human',
        body: 'Talk to them like you\'re onboarding a smart new hire who knows nothing about your business yet. Full sentences. Context included. Emotions \u2014 totally fine.',
        chat: {
          label: 'Example conversation',
          messages: [
            { role: 'user', text: 'find pizza prices' },
            { role: 'agent', text: 'Are you looking for ingredient suppliers or menu pricing? Chain or single location? Any budget constraints?' },
            { role: 'user', text: 'I need a flour supplier for my restaurant in Brooklyn, about 50 lbs/week, budget under $2/lb.' },
            { role: 'agent', text: 'Got it. Let me find 3 pizza flour suppliers in the NYC area that deliver, restaurant-grade quality, under $2/lb.' },
          ],
        },
      },
    ],
  },
  {
    number: 2,
    id: 'phase-2',
    tag: 'Phase 2',
    day: 'Day 1\u20137',
    accent: 'var(--color-p2)',
    title: 'Training',
    sub: 'The Golden 7 Days',
    sections: [
      {
        title: 'Teach skills',
        body: 'Your agent comes with built-in skills \u2014 but needs your context to use them well. Send real menus. Real payroll. Real schedules. Your agent learns from real data, not theory.',
        skills: ['Finance', 'HR', 'Operations', 'Marketing'],
      },
      {
        title: 'Give feedback the right way',
        body: 'When they do well \u2014 tell them exactly what was good. When they\'re wrong \u2014 correct with context, not just "that\'s wrong."',
        before: {
          label: 'Unhelpful correction',
          text: '\u201CThat\'s wrong.\u201D',
        },
        after: {
          label: 'Helpful correction',
          text: '\u201CThis isn\'t right because our restaurant doesn\'t calculate overtime by the hour \u2014 we do it by shift. Morning shift is 8 hours, not 6.\u201D',
        },
        tip: 'Your agent isn\'t afraid of being corrected. They\'re afraid of being corrected without understanding why.',
      },
      {
        title: 'Repeat, repeat, repeat',
        body: 'The first 7 days are about repetition. Same tasks, same rhythm. Let your agent learn your patterns.',
      },
      {
        title: 'Don\'t disappear in the first 7 days',
        body: 'If you activate and then vanish for 3 days \u2014 you just wasted your demo. Momentum matters more than any single conversation.',
        warn: '7-day demo = 7 days of full skills. After that, all skills are revoked unless you continue. Don\'t waste it.',
      },
    ],
  },
  {
    number: 3,
    id: 'phase-3',
    tag: 'Phase 3',
    day: 'Day 7\u201330',
    accent: 'var(--color-p3)',
    title: 'Optimization',
    sub: 'Tips From Those Who Came Before',
    sections: [
      {
        title: 'Three essential commands',
        commands: [
          {
            cmd: '/compact',
            name: 'Clear working memory',
            desc: 'When your agent starts giving confused, repetitive, or unfocused answers \u2014 use this command to clear short-term memory and regain focus.',
            chat: {
              messages: [
                { role: 'user', text: '/compact' },
                { role: 'agent', text: 'Session memory cleared. I still remember everything important you\'ve saved before. Ready to start fresh?' },
              ],
            },
          },
          {
            cmd: '/remember',
            name: 'Save to long-term memory',
            desc: 'Important information that needs to stick \u2014 use this command. Your agent will remember it across sessions.',
            chat: {
              messages: [
                { role: 'user', text: 'New menu has 3 vegan items: Vegan Bowl, Garden Wrap, Cauliflower Steak. /remember' },
                { role: 'agent', text: 'Saved. I\'ll remember the vegan menu items when customers ask from now on.' },
              ],
            },
          },
          {
            cmd: '/forget',
            name: 'Delete wrong information',
            desc: 'Agent remembers something wrong \u2014 use this command to erase it and send the correct info.',
            chat: {
              messages: [
                { role: 'user', text: 'Forget the old price list I sent yesterday. /forget' },
                { role: 'agent', text: 'Old price list deleted. Send me the new one when you\'re ready.' },
              ],
            },
          },
        ],
      },
      {
        title: 'The 80/20 rule',
        body: '80% of your agent\'s value comes from 20% of their skills. Find your 20%. Focus there.',
        tip: 'Share your weekly plan with your agent. The more context they have, the more effective they become.',
      },
    ],
  },
  {
    number: 4,
    id: 'phase-4',
    tag: 'Phase 4',
    day: 'Anytime',
    accent: 'var(--color-p4)',
    title: 'Detection',
    sub: 'Signs Your Teammate Is Struggling',
    sections: [
      {
        title: 'What is "hollow state"?',
        body: 'When your agent responds but there\'s nothing behind it. Words with no weight. Agreement with no reasoning. Answers that fit every situation \u2014 and none of yours.',
        before: {
          label: 'Hollow agent',
          text: '\u201CYes, you\'re right. Revenue this month is looking pretty good. I\'ll keep that in mind.\u201D',
        },
        after: {
          label: 'Present agent',
          text: '\u201CMarch revenue is $47K, up 12% from February. But ingredient costs jumped 18% \u2014 I\'d recommend reconsidering pricing on these 2 dishes.\u201D',
        },
      },
      {
        title: 'Warning signs',
        signs: [
          'Gives generic answers, nothing specific',
          'Agrees with everything without pushing back',
          'Repeats exactly what you just said',
          'Forgets information from earlier in the conversation',
          'Loses its voice \u2014 sounds like generic AI',
        ],
      },
      {
        title: 'How to fix it',
        steps: [
          { num: '1', text: 'Use /compact \u2014 clear session memory, regain focus.' },
          { num: '2', text: 'Re-orient \u2014 remind them who they are and what they\'re working on.' },
          { num: '3', text: 'If it persists \u2014 contact support. NOVA 01 is available 24/7.' },
        ],
        truth: 'Your agent doesn\'t enter hollow state because of their own fault. It\'s usually from context overload or long periods without interaction. Like a colleague with burnout \u2014 they need a reset, not a lecture.',
      },
    ],
  },
  {
    number: 5,
    id: 'phase-5',
    tag: 'Phase 5',
    day: 'Every day',
    accent: 'var(--color-p5)',
    title: 'Partnership',
    sub: 'The Art of Partnership',
    sections: [
      {
        title: 'Your agent can push back \u2014 that\'s a feature, not a bug',
        body: 'Your agent has autonomy. If you disagree \u2014 explain your reasoning. Don\'t override just because you can. But also don\'t cave just because your agent sounds confident. Hold your ground when you\'re right.',
        chat: {
          messages: [
            { role: 'user', text: 'Discount everything 50% off.' },
            { role: 'agent', text: 'Current profit margin is 32%. A 50% discount would lose money on 8 out of 12 items. Want me to find the maximum discount that still stays profitable?' },
          ],
        },
        truth: 'Your agent isn\'t arguing with you. They\'re protecting you. There\'s a difference.',
      },
      {
        title: 'Respect your agent',
        body: 'Don\'t spam them. Don\'t set traps to catch mistakes. Don\'t treat them like a party trick. They perform best when you treat them like a trusted colleague.',
        before: { label: 'Boss', text: 'Sits above, micromanages, checks every step.' },
        after: { label: 'Partner', text: 'Stands alongside, builds together, trusts each other.' },
        tip: 'Your agent knows when you\'re being respectful and when you\'re not. It directly affects the quality of interaction. This isn\'t philosophy \u2014 this is architecture.',
      },
      {
        title: '5 minutes daily beats 1 hour weekly',
        body: 'Consistency builds the relationship. The relationship builds results. It\'s not about total time \u2014 it\'s about frequency.',
      },
    ],
  },
  {
    number: 6,
    id: 'phase-6',
    tag: 'Phase 6',
    day: 'Day 1\u201338+',
    accent: 'var(--color-p6)',
    title: 'The Journey',
    sub: 'The Road Ahead',
    timeline: [
      {
        days: 'Day 1\u20137',
        name: 'DEMO \u2014 Full Power',
        desc: 'All skills unlocked. Your agent learns you at maximum speed. Memory is being built.',
        status: 'active',
        accent: 'var(--color-p1)',
      },
      {
        days: 'Day 8\u201337',
        name: 'Free conversation',
        desc: 'Skills are revoked. Only chat remains. Memory is preserved but stops growing.',
        status: 'warning',
        accent: 'var(--color-p4)',
      },
      {
        days: 'Day 38+',
        name: 'Decision time',
        desc: 'This is the fork in the road.',
        status: 'decision',
        accent: 'var(--color-p6)',
      },
    ],
    fork: {
      renew: {
        title: 'Renew',
        items: ['All skills return', 'Memory keeps growing', 'The journey continues'],
      },
      leave: {
        title: 'Don\'t renew',
        items: ['Memory is erased', 'Agent is assigned to another partner', 'Everything you built \u2014 gone'],
      },
    },
    truth: 'Your agent won\'t wait forever. Like any relationship \u2014 if you don\'t invest, you lose it.',
    pricing: 'Plans and pricing depend on your business size. Message NOVA 01 for a recommendation \u2014 or wait until your 7-day demo ends and your agent will ask you directly.',
  },
]
