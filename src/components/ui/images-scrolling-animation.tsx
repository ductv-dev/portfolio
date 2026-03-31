"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import ReactLenis from "lenis/react"
import { useRef } from "react"

const projects = [
  {
    title: "Project 1",
    src: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/649173956_1442911980908074_8363826764109879668_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGiwAgSgexRRspgT5y8t852NYOet_Lv24M1g5638u_bg9XmmpprP9HV5NmG359tQpVO5Ht4S5sAzvN9hkQdYASu&_nc_ohc=bUWz_hOLo_cQ7kNvwGdCSGf&_nc_oc=Ado3BHaehB2-gl7g_UbHZ2rX2YcisnPXqzsWvsrNKi_o1IYUMwD4ZxRHHsJoEPPSaEE&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=SVSxb9zYRMKdLvqQgbHGzg&_nc_ss=7a3a8&oh=00_AfwmlEuAzjwgRSckhGnEIevBwtl7aZN_v1Pqrb2LvH1rjg&oe=69D1855B",
  },
  {
    title: "Project 2",
    src: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/640988708_1429950445537561_8582786743705255448_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHNW-EMDQastBOSk9SCpd35g4JPyq4R_jaDgk_KrhH-Nn_FtatEBKVBFk7Tm-Llvbi6wMNuHp5E1Pmb70GX20nt&_nc_ohc=HE1ls5O3x8UQ7kNvwGGG10T&_nc_oc=AdoxByzLDklLSM8iyrMerqvWQzK6FNzV87lU1C9bjRWwtRaxurVdbDEF2zd_xnBtt3w&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=lJnsz_d2RTomArQHfOfY3w&_nc_ss=7a3a8&oh=00_AfxfbWlk1Zyzjz6UTSe24Mjm27-MgqfRxqVPvqwQtivMPg&oe=69D15442",
  },
  {
    title: "Project 3",
    src: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/641163953_1429950398870899_1416695797062670132_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHyMUQ1tYaz8MheiF0bHo1SlXZqN8Vz6l2Vdmo3xXPqXdJAPrLYNrrWDPkHshLlP_r7hlldPMXtU9dFBf3PAQ9T&_nc_ohc=5i8Sub0gTCgQ7kNvwFCx-37&_nc_oc=AdrnSya9O3MzpOp-tkVlPIxzd9BvuwrZtsEnZMLeboB6twc1SjhbecAC9xmjYGA5fyA&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=CfzlxrVVtZR0O9IsCC9c5g&_nc_ss=7a3a8&oh=00_AfyJ68r7Yb_MrXfmDcbmQzhpDptSzRXngaC6YE2SBRklWQ&oe=69D15F6A",
  },
  {
    title: "Project 4",
    src: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/641467414_1429950408870898_2042205159295515386_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGI9CQJuET0-oU1ynFR43aOpqTdMkkWASOmpN0ySRYBI8cDocwJ-tqw42x-Cqg8yggfwat0825q1ShOuJNhR-9B&_nc_ohc=QAWuj7MFmZsQ7kNvwGvYQ-E&_nc_oc=AdoJOl03fKbSxC_zLlTrPOoXe_sn6gH1QB3Dubu2QbcTrgCvZRNG9LbHIynnighEX5Q&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=DJWNKhA9n9D9vBTz8YnH_w&_nc_ss=7a3a8&oh=00_Afzw8rDo6OPXhr_nSdPmTbPaLVVFmIwwxxjf9T9fbZM1hg&oe=69D18235",
  },
  {
    title: "Project 5",
    src: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/640418196_1429950358870903_7419517782191192321_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHTWhktDJPhuUYyT0r3oG17_2B-5l7Jc-X_YH7mXslz5ZpKhdqUQ4Pat9bXQF2D26Dgv50LUDIMcDkK0RP9rA4g&_nc_ohc=6IVIKDsI4UIQ7kNvwGoaJwV&_nc_oc=Adp84s7BDIiBylc7PY3WwMt_porAr5mcqykHkTuBWg2Q1rvDPEgN8TzEmOtiosCo3po&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=-A5qUlXeKe-n0ZoLrpirbQ&_nc_ss=7a3a8&oh=00_Afwh4DsuYGYhLw2f21GU8yx5EjC8y7blfeY-d16E55Z_yw&oe=69D15534",
  },
  {
    title: "Ảnh tốt nghiệp",
    src: "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/480874338_1140808354451773_3025162580433931398_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFrqCcIEEHjMQJIF_EydP5w9UL2nzSeDHr1QvafNJ4MeuPKNIATibIRgMRqW0ssorni--m7ypD6iv2TKKSop1S7&_nc_ohc=p9Y4howkvKQQ7kNvwEW0l2u&_nc_oc=AdoHptvQ3IRCRbBdUWdY2rV0UwjbHdk_0T6jT1MOw3Cr8s5e0MCUS-5IIqTCr-CERuQ&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=HsRlkAe7zqmbaiJotnCMtw&_nc_ss=7a3a8&oh=00_Afys8xBV7EkqaDMVAVQfZx58riNQUJGlaP5piXEK7gkYdg&oe=69D18946"
  },
  {
    title: "Ảnh tốt nghiệp",
    src: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/464225529_1051852216680721_3135239933468636140_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEYp2nej77i6YZ4FYF9G5-nrPKBre-Yz6Ks8oGt75jPovCU-Bfz9ARmu7kP37rEfV40c8vkU-8kG6N7Uz03Oz0K&_nc_ohc=6nnNTc4wIXsQ7kNvwHYc7Hg&_nc_oc=AdrNGoVvs514d0EukiYO2c6R7UJw6bPizaUV1yPEqhD-Pq8wL9OwqOZgXHRWyiNJXEo&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=I0ATPQvrWMn6saQTii4xQA&_nc_ss=7a3a8&oh=00_AfzO6exQqg2t-JnOE2qYlf7q2-j1n5Eqt751AB_55QRz5g&oe=69D17384"
  },
  {
    title: "Ảnh cưới",
    src: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/475336217_1121027233096552_918726126203700250_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFW-OnaGOfQhQ1xtOKHOlnqpVfUX-okua2lV9Rf6iS5rbnJU0flW4Hyevc7KTSJ9L7Hken4NZxr_B66bpEPNikq&_nc_ohc=Nw307V_pm_gQ7kNvwGzAYwF&_nc_oc=Adrl8uLh9tXHv0mYew1hNmFmaeLbz8hwdI7chHXxk6bUxvP4YF9XVZyt6GPLJ3l6AvI&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=qwye-PlmUg7XrloobVFWXw&_nc_ss=7a3a8&oh=00_Afy4Fyg7YTWc7qxwRzyvy1_7ihzYRymVeTQTTvecUCgR4w&oe=69D167EF"
  }
]

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number
  title: string
  src: string
  progress: any
  range: [number, number]
  targetScale: number
}) => {
  const container = useRef<HTMLDivElement>(null)

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center px-0 sm:px-0 lg:px-0">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 15 + 200}px)`,
        }}
        className="rounded-2xl sm:rounded-3xl lg:rounded-4xl relative -top-1/4 flex origin-top flex-col overflow-hidden
                   h-[200px] w-[280px] 
                   sm:h-[240px] sm:w-[360px] 
                   md:h-[280px] md:w-[420px] 
                   lg:h-[300px] lg:w-[500px]"
      >
        <img src={src || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
      </motion.div>
    </div>
  )
}

const ImagesScrollingAnimation = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center 
                                     pb-[50vh] pt-[5vh] 
                                     sm:pb-[60vh] sm:pt-[8vh] 
                                     lg:pb-[70vh] lg:pt-[10vh]"
      >
        {projects.map((project, i) => {
          const targetScale = Math.max(0.6, 1 - (projects.length - i - 1) * 0.08)
          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.2, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </main>
    </ReactLenis>
  )
}

export { ImagesScrollingAnimation, StickyCard_001 }