import Image from "next/image";

export default function About() {
  const text = `Michael Freeman's prodigious talents playing reed instruments
            brought him from his childhood home of New Orleans to Berklee
            College of Music, where Michael's ska band was signed to Tim
            Armstrong's Hellcat Records. After successive Vans' Warped Tours,
            Michael realized that living in a van with ten other guys, playing
            the same nine songs repeatedly was not as glamorous as he'd
            envisioned. Subsequently, Michael quit the band and re-enrolled in
            college to earn his Bachelor's degree. But, Michael could never quit
            music, leading him to pursue a MM from NYU and ultimately an
            internship in the Mcgarrybowen music department, which was led at
            that time by Rob Kaplan. Michael learned the craft of integrating
            music into advertising and excelled to the point where he, up until
            recently, ran Ogilvy's music department.`;
  const text2 = ` Rob's journey from mcgarrybowen took him to Sony Music Publishing,
            where he represented the catalog to advertisers, brands and consumer
            products manufacturers globally, and then to form his own music
            supervision and production company, Wool & Tusk.`;
  const text3 = ` Now, Rob and Michael have reunited to create the Department of
            Music, your outsourced, in-house music department for any and all
            music needs. Drop us a note and we'd love to tell you more.`;
  return (
    <div className="h-screen w-screen flex flex-row items-center gap-6 bg-brandBlue">
      <div className="flex w-1/2 flex-col gap-4 pl-20">
        <div className="text-4xl font-bold text-left"> About Us</div>
        <div className="flex w-[720px] flex-col gap-6 items-center justify-center leading-8 text-m font-medium">
          <div>{text}</div>
          <div>{text2}</div>
          <div>{text3}</div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center">
            <Image
              src={"/MichaelLogo.png"}
              width={200}
              height={200}
              alt="oscar"
            />
            <div>Michael Freeman</div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={"/RobLogo.png"} width={200} height={200} alt="walrus" />
            <div>Robert Kaplan</div>
          </div>
        </div>
      </div>
    </div>
  );
}
