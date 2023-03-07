// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  blog: [
    {
      type: 'autogenerated',
      dirName: "blog",
    },
  ],
  tutorials: [
    {
      type: 'autogenerated',
      dirName: "tutorials",
    },
  ],
  guides: [
    {
      type: "autogenerated",
      dirName: "developer-docs",
    }

  ],
  references: [
    "references/index",
    {
      type: "category",
      label: "Internet Computer Spec",
      items: [
        "references/ic-interface-spec",
        "references/id-encoding-spec",
      ]
    },
    {
      type: "category",
      label: "Internet Computer SDK",
      items: [
        {
          type: "category",
          label: "dfx command line tool",
          link: {
            type: "doc",
            id: "references/cli-reference/index",
          },
          items: [
            "references/cli-reference/dfx-parent",
            "references/cli-reference/dfx-bootstrap",
            "references/cli-reference/dfx-build",
            "references/cli-reference/dfx-cache",
            "references/cli-reference/dfx-canister",
            "references/cli-reference/dfx-deploy",
            "references/cli-reference/dfx-generate",
            "references/cli-reference/dfx-help",
            "references/cli-reference/dfx-identity",
            "references/cli-reference/dfx-ledger",
            "references/cli-reference/dfx-new",
            "references/cli-reference/dfx-ping",
            "references/cli-reference/dfx-replica",
            "references/cli-reference/dfx-start",
            "references/cli-reference/dfx-stop",
            "references/cli-reference/dfx-upgrade",
            "references/cli-reference/dfx-wallet",
            "references/cli-reference/dfx-envars",
          ],
        },
        {
          type: "category",
          label: "quill command line tool",
          link: {
            type: "doc",
            id: "references/quill-cli-reference/index",
          },
          items: [
            "references/quill-cli-reference/quill-parent",
            "references/quill-cli-reference/quill-account-balance",
            "references/quill-cli-reference/quill-claim-neurons",
            "references/quill-cli-reference/quill-generate",
            "references/quill-cli-reference/quill-get-neuron-info",
            "references/quill-cli-reference/quill-get-proposal-info",
            "references/quill-cli-reference/quill-list-neurons",
            "references/quill-cli-reference/quill-list-proposals",
            "references/quill-cli-reference/quill-neuron-manage",
            "references/quill-cli-reference/quill-neuron-stake",
            "references/quill-cli-reference/quill-public-ids",
            "references/quill-cli-reference/quill-qr-code",
            "references/quill-cli-reference/quill-replace-node-provider-id",
            "references/quill-cli-reference/quill-scanner-qr-code",
            "references/quill-cli-reference/quill-send",
            "references/quill-cli-reference/quill-transfer",
            "references/quill-cli-reference/quill-update-node-provider",
          ],
        },
        {
          type: "doc",
          label: "dfx.json schema",
          id: "references/dfx-json-reference",
        },
      ]
    },
    {
      type: "category",
      label: "Languages",
      items: [
        {
          type: "link",
          label: "Motoko Base Library",
          href: "/docs/current/motoko/main/base/",
        },
        {
          type: "link",
          label: "Rust CDK References",
          href: "https://docs.rs/ic-cdk/",
        },
        "references/candid-ref",
      ]
    },
    {
      type: "category",
      label: "Core services",
      items: [
        {
          type: "doc",
          label: "Ledger canister",
          id: "references/ledger",
        },
        {
          type: "doc",
          label: "Internet Identity",
          id: "references/ii-spec",
        },
        {
          type: "doc",
          label: "Asset canister",
          id: "references/asset-canister",
        },
      ]
    },

    "references/glossary",

  ],
  concepts: [
    "concepts/index",
    "concepts/what-is-IC",
    "concepts/nodes-subnets",
    "concepts/data-centers",
    "concepts/canisters-code",
    "concepts/trust-in-canisters",
    "concepts/tokens-cycles",
    "concepts/governance",
  ],
  motoko: [
    {
      type: "category",
      label: "Motoko Language Tour",
      link: {
        type: "doc",
        id: "motoko/intro/index",
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'motoko/intro', // Generate sidebar slice from docs/tutorials/easy
        }]
    },
    {
      type: "category",
      label: "Motoko Developer Guide",
      link: {
        type: "doc",
        id: "motoko/main/about-this-guide",
      },
      items: [
        "motoko/version",
        "motoko/main/motoko",
        "motoko/main/basic-concepts",
        "motoko/main/base-intro",
        "motoko/main/mutable-state",
        "motoko/main/local-objects-classes",
        "motoko/main/actors-async",
        "motoko/main/errors",
        "motoko/main/pattern-matching",
        "motoko/main/sharing",
        "motoko/main/message-inspection",
        "motoko/main/modules-and-imports",
        "motoko/main/control-flow",
        "motoko/main/structural-equality",
        "motoko/main/actor-classes",
        "motoko/main/caller-id",
        "motoko/main/cycles",
        "motoko/main/upgrades",
        "motoko/main/compatibility",
        "motoko/main/stablememory",
        "motoko/main/timers",
        "motoko/main/heartbeats",
        "motoko/main/language-manual",
        "motoko/main/compiler-ref",
        "motoko/main/motoko-grammar",
        "motoko/main/overview",
        "motoko/main/style",
      ]
    },
    {
      type: "category",
      label: "Motoko Base Library Reference",
      link: {
        type: "doc",
        id: "motoko/main/base/index",
      },
      items: [
        "motoko/main/base/Array",
        "motoko/main/base/AssocList",
        "motoko/main/base/Blob",
        "motoko/main/base/Bool",
        "motoko/main/base/Buffer",
        "motoko/main/base/CertifiedData",
        "motoko/main/base/Char",
        "motoko/main/base/Debug",
        "motoko/main/base/Deque",
        "motoko/main/base/Error",
        "motoko/main/base/ExperimentalCycles",
        "motoko/main/base/ExperimentalInternetComputer",
        "motoko/main/base/ExperimentalStableMemory",
        "motoko/main/base/Float",
        "motoko/main/base/Func",
        "motoko/main/base/Hash",
        "motoko/main/base/HashMap",
        "motoko/main/base/Heap",
        "motoko/main/base/Int",
        "motoko/main/base/Int8",
        "motoko/main/base/Int16",
        "motoko/main/base/Int32",
        "motoko/main/base/Int64",
        "motoko/main/base/Iter",
        "motoko/main/base/IterType",
        "motoko/main/base/List",
        "motoko/main/base/Nat",
        "motoko/main/base/Nat8",
        "motoko/main/base/Nat16",
        "motoko/main/base/Nat32",
        "motoko/main/base/Nat64",
        "motoko/main/base/Option",
        "motoko/main/base/Order",
        "motoko/main/base/Prelude",
        "motoko/main/base/Principal",
        "motoko/main/base/Random",
        "motoko/main/base/RBTree",
        "motoko/main/base/Result",
        "motoko/main/base/Stack",
        "motoko/main/base/Text",
        "motoko/main/base/Time",
        "motoko/main/base/Timer",
        "motoko/main/base/Trie",
        "motoko/main/base/TrieMap",
        "motoko/main/base/TrieSet",
      ],
    },
  ],
  tokenomics: [
    {
      type: "autogenerated",
      dirName: "developer-docs",
    }
  ],
  samples: [
    "samples/deploying-your-first-bitcoin-dapp",
    "samples/t-ecdsa-sample",
    "samples/http-requests-exchange-rates",
    "samples/hello",
    "samples/host-a-website",
    "samples/dex",
    "samples/nft",
    "samples/dao",
    "samples/encrypted-notes",
    "samples/token-transfer",
    "samples/host-a-webgame",
    "samples/hackathon-projects",
    "samples/ios-integration",
  ],
};

module.exports = sidebars;
