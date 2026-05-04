// ---------------------------------------------------------------------------
// English translation index — assembles all per-module and shared files
// ---------------------------------------------------------------------------
//
// Do NOT edit content here. Edit the individual files:
//   shared.ts       → nav, footer, layout labels, 404
//   contentDC.ts    → Digital Citizenship content + challenge
//   contentAP.ts    → Attacker Perspective content + challenge
//   contentAT.ts    → Authentication content + challenge
//   contentDP.ts    → Data Privacy content + challenge
//   contentSE.ts    → Social Engineering content + challenge
//   contentMW.ts    → Malware content + challenge
//   contentDA.ts    → Digital Abuse content + challenge
// ---------------------------------------------------------------------------

import { shared } from './shared'
import { contentDC, challengeDC } from './contentDC'
import { contentAP, challengeAP } from './contentAP'
import { contentAT, challengeAT } from './contentAT'
import { contentDP, challengeDP } from './contentDP'
import { contentSE, challengeSE } from './contentSE'
import { contentMW, challengeMW } from './contentMW'
import { contentDA, challengeDA } from './contentDA'

export const no = {
  ...shared,
  contentDC,
  challengeDC,
  contentAP,
  challengeAP,
  contentAT,
  challengeAT,
  contentDP,
  challengeDP,
  contentSE,
  challengeSE,
  contentMW,
  challengeMW,
  contentDA,
  challengeDA,
}
