import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white pt-24 pb-[clamp(4rem,10vh,8rem)] px-6">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Base dark layer */}
        <div className="absolute inset-0 bg-black" />

        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <div className="mb-20 text-center">
          <h1 className="font-semibold tracking-tight text-[clamp(2.5rem,5vw,4rem)]">
            About Marmot Association
          </h1>

          <p className="mt-6 text-zinc-400 text-[clamp(1rem,1.5vw,1.25rem)] max-w-3xl mx-auto">
            A student-led platform dedicated to helping communities discover,
            support, and elevate local businesses.
          </p>
        </div>

        {/* ================= MISSION ================= */}
        <div className="mb-24 grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-zinc-300 leading-relaxed">
              Marmot Association was built to strengthen local economies by
              connecting people with small businesses in their area.
              We believe local support builds stronger communities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-zinc-300 leading-relaxed">
              We aim to create a transparent and accessible platform where
              businesses can grow, customers can contribute, and communities
              thrive together.
            </p>
          </div>
        </div>

        {/* ================= HOW IT WORKS ================= */}
        <div className="mb-32">
          <h2 className="text-2xl font-semibold mb-10 text-center">
            How It Works
          </h2>

          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Discover</h3>
              <p className="text-zinc-400 text-sm">
                Browse verified local businesses in your area.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Support</h3>
              <p className="text-zinc-400 text-sm">
                Donate, review, or promote businesses you care about.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h3 className="font-semibold mb-2">Grow</h3>
              <p className="text-zinc-400 text-sm">
                Help small businesses reach more customers and thrive.
              </p>
            </div>
          </div>
        </div>

        {/* ================= FOUNDERS SECTION ================= */}
        <div className="relative">

          {/* Section glow background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900/10 via-fuchsia-900/10 to-purple-900/10 blur-3xl opacity-60" />

          <h2 className="text-center text-2xl font-semibold mb-12">
            Meet the Founders
          </h2>

          <div className="flex flex-col gap-12 lg:flex-row">

            {/* Founder Card 1 */}
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10 group">
              <div className="relative h-[420px] w-full">
                <Image
                  src="/SLB_Suit.png"
                  alt="Founder 1"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-semibold mb-2">
                  Victor Braday
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Short description about your role and contributions to Marmot Association.
                </p>
              </div>
            </div>

            {/* Founder Card 2 */}
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10 group">
              <div className="relative h-[420px] w-full">
                <Image
                  src="/SLB_Suit.png"
                  alt="Founder 2"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-semibold mb-2">
                    Aaron Jagroop
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                    Short description about your role and contributions to Marmot Association.
                </p>
              </div>
            </div>

            {/* Founder Card 3 */}
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10 group">
              <div className="relative h-[420px] w-full">
                <Image
                  src="/SLB_Suit.png"
                  alt="Founder 3"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-semibold mb-2">
                    Janka
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                    Short description about your role and contributions to Marmot Association.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
