# star-catcher

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/yangyunkun318/star-catcher/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/yangyunkun318/star-catcher/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt, one game. My AI agent built this tiny browser game from one prompt while I watched: Star Catcher — 太空接星星, move left and right to catch falling stars.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=zhc1s3ge&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>

## The one-sentence prompt

> 做一个太空接星星游戏，左右移动接住落下的星星

> Make a space star-catching game: move left and right to catch falling stars.

## How to play

- Move the UFO / ship left and right: keyboard `←` `→` / `A` `D`, mouse, or touch drag.
- Catch falling stars to score:
  - Gold star: **+10**
  - Rare diamond star: **+30**
  - Consecutive catches build a combo, up to **×5**
- Avoid meteors, and don't let stars fall past you: missing 3 stars costs 1 life.
- You have **3 lives**. Every 15 seconds you level up and the stars fall faster.

The playable game is at the artifact built for this prompt (Star Catcher, slug `tai-kong-jie-xing-xing-you-xi`).

## The video entry

The X post for this bounty carries the short video about the agent building this game from the one prompt above. The video ends with make.fun's official referral end card.

- Bounty: The agent builds a game from one prompt — $20, make.fun
- Bounty page: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
- X account: @gmove1681 (public)
- GitHub: yangyunkun318
- make.fun play code / referral code: `zhc1s3ge`
- Referral link: https://make.fun/r/zhc1s3ge

## This repository

- `main.ts` — Node 22, standard library only. It copies `POST.json` from the repository root to the output directory. No network, no wall clock.
- `POST.json` — the X post URL for the entry: https://x.com/GMOVE1681/status/2124594135369990317
- `LICENSE` — MIT

## Run `main.ts` locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/POST.json
```
