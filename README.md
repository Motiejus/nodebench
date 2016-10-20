zero-config and dict lookup micro-benchmark
-------------------------------------------


On this machine:

    ┌──────────────────┬────────────────────────────────────────────────────┐
    │ Date             │ Thu Oct 20 2016 11:16:41 GMT+0200 (CEST)           │
    ├──────────────────┼────────────────────────────────────────────────────┤
    │ Node.js          │ v4.6.0                                             │
    ├──────────────────┼────────────────────────────────────────────────────┤
    │ Operating System │ Darwin x64 15.6.0                                  │
    ├──────────────────┼────────────────────────────────────────────────────┤
    │ CPU              │ Intel(R) Core(TM) i7-5557U CPU @ 3.10GHz (4 cores) │
    ├──────────────────┼────────────────────────────────────────────────────┤
    │ Memory           │ 16 GB (total), 5.609 GB (free)                     │
    └──────────────────┴────────────────────────────────────────────────────┘

I get the following results:

    Name                    Operations per second    Average time, ms
    d['key500']             243                      4                   ==========>
    config.get('key500')    0.54                     1.9 x 10^3          >

Which is about 0.54M `config.get()` lookups per second, and 243M dictionary
lookups per second (1800ns and 4ns per lookup respectively).

Do It Yourself
--------------

    % npm install
    % node ./index.js
