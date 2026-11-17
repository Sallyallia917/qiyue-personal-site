/*
 * 网站内容编辑区（V1）
 * 日常修改优先在这里完成，不需要编辑 HTML。
 * 只修改引号内文字；需要换行可保留 <br>，强调可保留 <em>。
 */
(() => {
  const SITE_CONTENT = {
    shared: {
      ".sidebar-kicker": "PEOPLE · BUSINESS · TECHNOLOGY",
      ".sidebar-intro h1": "李七月 <span>Sally</span>",
      ".sidebar-intro h2": "商业 · 组织 · 技术　<em>系统与人的协作</em>",
      ".sidebar-intro > p:not(.sidebar-kicker)": "长期关注商业、组织与技术如何共同塑造人的工作方式，并从 CRM、B 端产品与测试经验出发，持续探索企业系统与 AI 应用的结合。",
      ".sidebar-intro .sidebar-detail": "",
    },
    home: {
      "#about .section-title": "连接业务、系统与 AI，<br><em>让产品方案经得起真实场景检验。</em>",
      "#about .intro-copy p:nth-child(1)": "我的经历横跨 CRM 实施、软件测试、B 端产品与 AI 产品运营。这些经历让我习惯同时观察业务流程、系统规则、产品体验与质量边界，并通过独立原型把想法转化为可运行、可检验的产品方案。",
      "#about .intro-copy p:nth-child(2)": "我关注的不是简单叠加大模型，而是判断任务应由规则处理、模型理解还是工具执行，何时需要上下文协同与人工接管，再通过测试集、场景验收和缺陷回归验证系统行为。目标方向：AI 应用产品经理、企业服务 / 客户运营 AI 产品经理、业务流程 Agent 产品经理。"
    },
    resume: {
      ".resume-hero h1": "李七月 <em>｜AI 产品经理</em>",
      ".resume-summary": "计算机科学与技术本科、工商管理硕士，具备 CRM 实施、软件测试、B 端产品及 AI 产品运营经历。能够从业务流程与组织需求出发，完成复杂业务建模、AI 应用方案设计、原型验证与质量评测；具备规则 / LLM / RAG 分层协作、上下文与工作流管理、人工接管及异常治理等实践经验。",
      ".resume-contact": "目标岗位：AI 应用产品经理｜企业服务 · 客户运营 · 业务流程 Agent"
    },
    ees: {
      ".case-hero h1": "EES 酒店与民宿<br><em>AI 智能服务工作流</em>",
      ".case-summary": "从民宿与酒店一线服务问题出发，构建集意图识别、知识检索、订单核验、对话上下文与工单协同于一体的 AI 服务工作流原型。"
    },
    experience: {
      ".case-summary": "围绕真实业务场景参与 AI 服务运营、样本分析、Prompt 与规则迭代、人工协作流程及风险问题闭环。"
    },
    scrm: {
      ".case-hero h1": "AI 医患服务<br><em>自动化</em>",
      ".case-summary": "医疗服务里的难点，不是让 AI 生成一句话，而是判断何时能自动回复、怎样控制回答质量，以及何时必须交给人工。"
    },
    coffee: {
      ".case-hero h1": "Coffee Growth<br><em>Engine</em>",
      ".case-summary": "把消费者研究转成可以执行、可以测试的会员营销决策。规则负责商业约束，大模型负责适合生成式 AI 的语言任务——先让系统可控，再逐步扩展。"
    },
    research: {
      ".case-hero h1": "行业研究<br><em>与机会识别</em>",
      ".case-summary": "从人的需求出发，研究行业如何组织供给、分配资源与创造价值，并把结构性洞察转化为产品问题和商业机会假设。"
    }
  };
  const page = document.body.dataset.page;
  const apply = (entries) => Object.entries(entries || {}).forEach(([selector, value]) => {
    const node = document.querySelector(selector);
    if (node && typeof value === "string") node.innerHTML = value;
  });
  apply(SITE_CONTENT.shared);
  apply(SITE_CONTENT[page]);
})();
