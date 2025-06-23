import{j as n,a,F as c}from"./index-3c0446f3.js";function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",span:"span",...e.components};return a(c,{children:[n(s.p,{children:"React continues to evolve as one of the most popular frontend libraries. As we move through 2025, certain practices have emerged as standards for building efficient, maintainable React applications."}),`
`,a(s.h2,{id:"modern-react-foundation",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#modern-react-foundation",children:n(s.span,{className:"icon icon-link"})}),"Modern React Foundation"]}),`
`,a(s.h3,{id:"1-functional-components-and-hooks",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-functional-components-and-hooks",children:n(s.span,{className:"icon icon-link"})}),"1. Functional Components and Hooks"]}),`
`,n(s.p,{children:"Class components are now considered legacy code. Embrace functional components with hooks:"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-comment",children:"// Instead of this (class component)"}),`
`,n(s.span,{className:"hljs-keyword",children:"class"})," ",n(s.span,{className:"hljs-title class_",children:"Counter"})," ",n(s.span,{className:"hljs-keyword",children:"extends"})," ",n(s.span,{className:"hljs-title class_ inherited__",children:"React.Component"}),` {
  state = { `,n(s.span,{className:"hljs-attr",children:"count"}),": ",n(s.span,{className:"hljs-number",children:"0"}),` };

  increment = `,n(s.span,{className:"hljs-function",children:"() =>"}),` {
    `,n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-title function_",children:"setState"}),"({ ",n(s.span,{className:"hljs-attr",children:"count"}),": ",n(s.span,{className:"hljs-variable language_",children:"this"}),".",n(s.span,{className:"hljs-property",children:"state"}),".",n(s.span,{className:"hljs-property",children:"count"})," + ",n(s.span,{className:"hljs-number",children:"1"}),` });
  };

  `,n(s.span,{className:"hljs-title function_",children:"render"}),"(",n(s.span,{className:"hljs-params"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
      `,a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"div"}),">"]}),`
        `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"p"}),">"]}),"Count: {this.state.count}",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"p"}),">"]}),`
        `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{this.increment}"}),">"]}),"Increment",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"button"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
    );
  }
}

`,n(s.span,{className:"hljs-comment",children:"// Do this (functional component with hooks)"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"Counter"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," [count, setCount] = ",n(s.span,{className:"hljs-title function_",children:"useState"}),"(",n(s.span,{className:"hljs-number",children:"0"}),`);

  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"div"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"p"}),">"]}),"Count: {count}",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"p"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"button"})," ",n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{()"})," =>"]})," setCount(count + 1)}>Increment",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"button"}),">"]}),`
    `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"div"}),">"]})]}),`
  );
}
`]})}),`
`,a(s.h3,{id:"2-custom-hooks-for-logic-reuse",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-custom-hooks-for-logic-reuse",children:n(s.span,{className:"icon icon-link"})}),"2. Custom Hooks for Logic Reuse"]}),`
`,n(s.p,{children:"Extract reusable logic into custom hooks:"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-comment",children:"// Custom hook for form handling"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"useForm"}),"(",n(s.span,{className:"hljs-params",children:"initialValues"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," [values, setValues] = ",n(s.span,{className:"hljs-title function_",children:"useState"}),`(initialValues);

  `,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title function_",children:"handleChange"})," = (",n(s.span,{className:"hljs-params",children:"e"}),`) => {
    `,n(s.span,{className:"hljs-keyword",children:"const"})," { name, value } = e.",n(s.span,{className:"hljs-property",children:"target"}),`;
    `,n(s.span,{className:"hljs-title function_",children:"setValues"}),`({
      ...values,
      [name]: value,
    });
  };

  `,n(s.span,{className:"hljs-keyword",children:"return"}),` { values, handleChange };
}

`,n(s.span,{className:"hljs-comment",children:"// Usage"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"SignupForm"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," { values, handleChange } = ",n(s.span,{className:"hljs-title function_",children:"useForm"}),"({ ",n(s.span,{className:"hljs-attr",children:"username"}),": ",n(s.span,{className:"hljs-string",children:'""'}),", ",n(s.span,{className:"hljs-attr",children:"email"}),": ",n(s.span,{className:"hljs-string",children:'""'}),` });

  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"form"}),">"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"input"})," ",n(s.span,{className:"hljs-attr",children:"name"}),"=",n(s.span,{className:"hljs-string",children:'"username"'})," ",n(s.span,{className:"hljs-attr",children:"value"}),"=",n(s.span,{className:"hljs-string",children:"{values.username}"})," ",n(s.span,{className:"hljs-attr",children:"onChange"}),"=",n(s.span,{className:"hljs-string",children:"{handleChange}"})," />"]}),`
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"input"})," ",n(s.span,{className:"hljs-attr",children:"name"}),"=",n(s.span,{className:"hljs-string",children:'"email"'})," ",n(s.span,{className:"hljs-attr",children:"value"}),"=",n(s.span,{className:"hljs-string",children:"{values.email}"})," ",n(s.span,{className:"hljs-attr",children:"onChange"}),"=",n(s.span,{className:"hljs-string",children:"{handleChange}"})," />"]}),`
    `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"form"}),">"]})]}),`
  );
}
`]})}),`
`,a(s.h2,{id:"state-management",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#state-management",children:n(s.span,{className:"icon icon-link"})}),"State Management"]}),`
`,a(s.h3,{id:"1-context-api--usereducer-for-global-state",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-context-api--usereducer-for-global-state",children:n(s.span,{className:"icon icon-link"})}),"1. Context API + useReducer for Global State"]}),`
`,n(s.p,{children:"For many applications, Redux is no longer necessary. The combination of Context API and useReducer often provides a simpler solution:"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-comment",children:"// Create context"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"TodoContext"})," = ",n(s.span,{className:"hljs-title function_",children:"createContext"}),`();

`,n(s.span,{className:"hljs-comment",children:"// Reducer"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"todoReducer"}),"(",n(s.span,{className:"hljs-params",children:"state, action"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"switch"})," (action.",n(s.span,{className:"hljs-property",children:"type"}),`) {
    `,n(s.span,{className:"hljs-keyword",children:"case"})," ",n(s.span,{className:"hljs-string",children:'"ADD_TODO"'}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"})," [...state, action.",n(s.span,{className:"hljs-property",children:"payload"}),`];
    `,n(s.span,{className:"hljs-keyword",children:"case"})," ",n(s.span,{className:"hljs-string",children:'"TOGGLE_TODO"'}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"})," state.",n(s.span,{className:"hljs-title function_",children:"map"}),"(",a(s.span,{className:"hljs-function",children:["(",n(s.span,{className:"hljs-params",children:"todo"}),") =>"]}),`
        todo.`,n(s.span,{className:"hljs-property",children:"id"})," === action.",n(s.span,{className:"hljs-property",children:"payload"})," ? { ...todo, ",n(s.span,{className:"hljs-attr",children:"completed"}),": !todo.",n(s.span,{className:"hljs-property",children:"completed"}),` } : todo
      );
    `,n(s.span,{className:"hljs-attr",children:"default"}),`:
      `,n(s.span,{className:"hljs-keyword",children:"return"}),` state;
  }
}

`,n(s.span,{className:"hljs-comment",children:"// Provider component"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"TodoProvider"}),"(",n(s.span,{className:"hljs-params",children:"{ children }"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," [todos, dispatch] = ",n(s.span,{className:"hljs-title function_",children:"useReducer"}),`(todoReducer, []);

  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"TodoContext.Provider"})," ",n(s.span,{className:"hljs-attr",children:"value"}),"=",n(s.span,{className:"hljs-string",children:"{{"})," ",n(s.span,{className:"hljs-attr",children:"todos"}),", ",n(s.span,{className:"hljs-attr",children:"dispatch"})," }}>"]}),"{children}",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"TodoContext.Provider"}),">"]})]}),`;
}

`,n(s.span,{className:"hljs-comment",children:"// Consumer component"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"TodoList"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," { todos, dispatch } = ",n(s.span,{className:"hljs-title function_",children:"useContext"}),"(",n(s.span,{className:"hljs-title class_",children:"TodoContext"}),`);

  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"ul"}),">"]}),`
      {todos.map((todo) => (
        `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"li"}),`
          `,n(s.span,{className:"hljs-attr",children:"key"}),"=",n(s.span,{className:"hljs-string",children:"{todo.id}"}),`
          `,n(s.span,{className:"hljs-attr",children:"onClick"}),"=",n(s.span,{className:"hljs-string",children:"{()"})," =>"]}),`
            dispatch({
              type: "TOGGLE_TODO",
              payload: todo.id,
            })
          }
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"li"}),">"]}),`
      ))}
    `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"ul"}),">"]})]}),`
  );
}
`]})}),`
`,a(s.h3,{id:"2-server-state-management",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-server-state-management",children:n(s.span,{className:"icon icon-link"})}),"2. Server State Management"]}),`
`,n(s.p,{children:"For server data, use purpose-built libraries like React Query or SWR:"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-comment",children:"// Using React Query"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"UserProfile"}),"(",n(s.span,{className:"hljs-params",children:"{ userId }"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," { data, isLoading, error } = ",n(s.span,{className:"hljs-title function_",children:"useQuery"}),`(
    [`,n(s.span,{className:"hljs-string",children:'"user"'}),`, userId],
    `,n(s.span,{className:"hljs-function",children:"() =>"})," ",n(s.span,{className:"hljs-title function_",children:"fetchUser"}),`(userId),
    { `,n(s.span,{className:"hljs-attr",children:"staleTime"}),": ",n(s.span,{className:"hljs-number",children:"300000"})," } ",n(s.span,{className:"hljs-comment",children:"// 5 minutes"}),`
  );

  `,n(s.span,{className:"hljs-keyword",children:"if"})," (isLoading) ",n(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"p"}),">"]}),"Loading...",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"p"}),">"]})]}),`;
  `,n(s.span,{className:"hljs-keyword",children:"if"})," (error) ",n(s.span,{className:"hljs-keyword",children:"return"})," ",a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"p"}),">"]}),"Error: {error.message}",a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"p"}),">"]})]}),`;

  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"xml",children:a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"UserDetails"})," ",n(s.span,{className:"hljs-attr",children:"user"}),"=",n(s.span,{className:"hljs-string",children:"{data}"})," />"]})}),`;
}
`]})}),`
`,a(s.h2,{id:"performance-optimization",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#performance-optimization",children:n(s.span,{className:"icon icon-link"})}),"Performance Optimization"]}),`
`,a(s.h3,{id:"1-proper-dependency-arrays-in-hooks",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-proper-dependency-arrays-in-hooks",children:n(s.span,{className:"icon icon-link"})}),"1. Proper Dependency Arrays in Hooks"]}),`
`,n(s.p,{children:"Always specify dependencies correctly in useEffect, useMemo, and useCallback:"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-comment",children:"// Bad - missing dependencies"}),`
`,n(s.span,{className:"hljs-title function_",children:"useEffect"}),"(",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-title function_",children:"fetchData"}),`(userId);
}, []); `,n(s.span,{className:"hljs-comment",children:"// Missing userId dependency"}),`

`,n(s.span,{className:"hljs-comment",children:"// Good - correct dependencies"}),`
`,n(s.span,{className:"hljs-title function_",children:"useEffect"}),"(",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-title function_",children:"fetchData"}),`(userId);
}, [userId]);
`]})}),`
`,a(s.h3,{id:"2-memoization",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-memoization",children:n(s.span,{className:"icon icon-link"})}),"2. Memoization"]}),`
`,n(s.p,{children:"Use React.memo, useMemo, and useCallback appropriately:"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-comment",children:"// Memoize expensive component"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"MemoizedComponent"})," = ",n(s.span,{className:"hljs-title class_",children:"React"}),".",n(s.span,{className:"hljs-title function_",children:"memo"}),"(",n(s.span,{className:"hljs-title class_",children:"ExpensiveComponent"}),`);

`,n(s.span,{className:"hljs-comment",children:"// Memoize expensive calculations"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," memoizedValue = ",n(s.span,{className:"hljs-title function_",children:"useMemo"}),"(",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"return"})," ",n(s.span,{className:"hljs-title function_",children:"computeExpensiveValue"}),`(a, b);
}, [a, b]);

`,n(s.span,{className:"hljs-comment",children:"// Memoize callbacks"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," memoizedCallback = ",n(s.span,{className:"hljs-title function_",children:"useCallback"}),"(",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-title function_",children:"doSomething"}),`(a, b);
}, [a, b]);
`]})}),`
`,a(s.h3,{id:"3-code-splitting",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#3-code-splitting",children:n(s.span,{className:"icon icon-link"})}),"3. Code Splitting"]}),`
`,n(s.p,{children:"Split your app into smaller chunks using dynamic imports:"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-comment",children:"// Instead of static import"}),`
`,n(s.span,{className:"hljs-keyword",children:"import"})," ",n(s.span,{className:"hljs-title class_",children:"Dashboard"})," ",n(s.span,{className:"hljs-keyword",children:"from"})," ",n(s.span,{className:"hljs-string",children:'"./Dashboard"'}),`;

`,n(s.span,{className:"hljs-comment",children:"// Use dynamic import with React.lazy"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"Dashboard"})," = ",n(s.span,{className:"hljs-title class_",children:"React"}),".",n(s.span,{className:"hljs-title function_",children:"lazy"}),"(",n(s.span,{className:"hljs-function",children:"() =>"})," ",n(s.span,{className:"hljs-keyword",children:"import"}),"(",n(s.span,{className:"hljs-string",children:'"./Dashboard"'}),`));

`,n(s.span,{className:"hljs-comment",children:"// And use with Suspense"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"App"}),"(",n(s.span,{className:"hljs-params"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Suspense"})," ",n(s.span,{className:"hljs-attr",children:"fallback"}),"=",n(s.span,{className:"hljs-string",children:"{"}),"<",n(s.span,{className:"hljs-attr",children:"Spinner"})," />"]}),`}>
      `,a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Dashboard"})," />"]}),`
    `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"Suspense"}),">"]})]}),`
  );
}
`]})}),`
`,a(s.h2,{id:"modern-styling-approaches",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#modern-styling-approaches",children:n(s.span,{className:"icon icon-link"})}),"Modern Styling Approaches"]}),`
`,a(s.h3,{id:"1-css-in-js-or-tailwind-css",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-css-in-js-or-tailwind-css",children:n(s.span,{className:"icon icon-link"})}),"1. CSS-in-JS or Tailwind CSS"]}),`
`,n(s.p,{children:"Consider using modern styling solutions:"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-comment",children:"// Using styled-components"}),`
`,n(s.span,{className:"hljs-keyword",children:"const"})," ",n(s.span,{className:"hljs-title class_",children:"Button"})," = styled.",n(s.span,{className:"hljs-property",children:"button"}),a(s.span,{className:"hljs-string",children:["`\n  background: ",a(s.span,{className:"hljs-subst",children:["${(props) => (props.primary ? ",n(s.span,{className:"hljs-string",children:'"blue"'})," : ",n(s.span,{className:"hljs-string",children:'"white"'}),")}"]}),`;
  color: `,a(s.span,{className:"hljs-subst",children:["${(props) => (props.primary ? ",n(s.span,{className:"hljs-string",children:'"white"'})," : ",n(s.span,{className:"hljs-string",children:'"blue"'}),")}"]}),`;
  padding: 0.5rem 1rem;
  border-radius: 4px;
\``]}),`;

`,n(s.span,{className:"hljs-comment",children:"// Using Tailwind CSS"}),`
`,n(s.span,{className:"hljs-keyword",children:"function"})," ",n(s.span,{className:"hljs-title function_",children:"Button"}),"(",n(s.span,{className:"hljs-params",children:"{ primary, children }"}),`) {
  `,n(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,a(s.span,{className:"xml",children:[a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"button"}),`
      `,n(s.span,{className:"hljs-attr",children:"className"}),"=",n(s.span,{className:"hljs-string",children:"{"}),"`",n(s.span,{className:"hljs-attr",children:"px-4"})," ",n(s.span,{className:"hljs-attr",children:"py-2"})," ",n(s.span,{className:"hljs-attr",children:"rounded"})," ${\n        ",n(s.span,{className:"hljs-attr",children:"primary"}),' ? "',n(s.span,{className:"hljs-attr",children:"bg-blue-500"})," ",n(s.span,{className:"hljs-attr",children:"text-white"}),'" ',n(s.span,{className:"hljs-attr",children:":"}),' "',n(s.span,{className:"hljs-attr",children:"bg-white"})," ",n(s.span,{className:"hljs-attr",children:"text-blue-500"}),`"
      }\`}
    >`]}),`
      {children}
    `,a(s.span,{className:"hljs-tag",children:["</",n(s.span,{className:"hljs-name",children:"button"}),">"]})]}),`
  );
}
`]})}),`
`,a(s.h2,{id:"testing",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#testing",children:n(s.span,{className:"icon icon-link"})}),"Testing"]}),`
`,a(s.h3,{id:"1-component-testing-with-react-testing-library",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-component-testing-with-react-testing-library",children:n(s.span,{className:"icon icon-link"})}),"1. Component Testing with React Testing Library"]}),`
`,n(s.p,{children:"Focus on behavior rather than implementation details:"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-jsx",children:[n(s.span,{className:"hljs-comment",children:"// Testing a form component"}),`
`,n(s.span,{className:"hljs-title function_",children:"test"}),"(",n(s.span,{className:"hljs-string",children:'"submitting the form calls onSubmit with name"'}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-keyword",children:"const"})," handleSubmit = jest.",n(s.span,{className:"hljs-title function_",children:"fn"}),`();

  `,n(s.span,{className:"hljs-title function_",children:"render"}),"(",n(s.span,{className:"xml",children:a(s.span,{className:"hljs-tag",children:["<",n(s.span,{className:"hljs-name",children:"Form"})," ",n(s.span,{className:"hljs-attr",children:"onSubmit"}),"=",n(s.span,{className:"hljs-string",children:"{handleSubmit}"})," />"]})}),`);

  fireEvent.`,n(s.span,{className:"hljs-title function_",children:"change"}),"(screen.",n(s.span,{className:"hljs-title function_",children:"getByLabelText"}),"(",n(s.span,{className:"hljs-regexp",children:"/name/i"}),`), {
    `,n(s.span,{className:"hljs-attr",children:"target"}),": { ",n(s.span,{className:"hljs-attr",children:"value"}),": ",n(s.span,{className:"hljs-string",children:'"John Doe"'}),` },
  });

  fireEvent.`,n(s.span,{className:"hljs-title function_",children:"click"}),"(screen.",n(s.span,{className:"hljs-title function_",children:"getByText"}),"(",n(s.span,{className:"hljs-regexp",children:"/submit/i"}),`));

  `,n(s.span,{className:"hljs-title function_",children:"expect"}),"(handleSubmit).",n(s.span,{className:"hljs-title function_",children:"toHaveBeenCalledWith"}),"(expect.",n(s.span,{className:"hljs-title function_",children:"objectContaining"}),"({ ",n(s.span,{className:"hljs-attr",children:"name"}),": ",n(s.span,{className:"hljs-string",children:'"John Doe"'}),` }));
});
`]})}),`
`,a(s.h3,{id:"2-end-to-end-testing",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-end-to-end-testing",children:n(s.span,{className:"icon icon-link"})}),"2. End-to-End Testing"]}),`
`,n(s.p,{children:"For critical user flows, use tools like Cypress or Playwright:"}),`
`,n(s.pre,{children:a(s.code,{className:"hljs language-javascript",children:[n(s.span,{className:"hljs-comment",children:"// Cypress test example"}),`
`,n(s.span,{className:"hljs-title function_",children:"describe"}),"(",n(s.span,{className:"hljs-string",children:'"Authentication"'}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
  `,n(s.span,{className:"hljs-title function_",children:"it"}),"(",n(s.span,{className:"hljs-string",children:'"allows users to log in"'}),", ",n(s.span,{className:"hljs-function",children:"() =>"}),` {
    cy.`,n(s.span,{className:"hljs-title function_",children:"visit"}),"(",n(s.span,{className:"hljs-string",children:'"/login"'}),`);
    cy.`,n(s.span,{className:"hljs-title function_",children:"findByLabelText"}),"(",n(s.span,{className:"hljs-regexp",children:"/email/i"}),").",n(s.span,{className:"hljs-title function_",children:"type"}),"(",n(s.span,{className:"hljs-string",children:'"user@example.com"'}),`);
    cy.`,n(s.span,{className:"hljs-title function_",children:"findByLabelText"}),"(",n(s.span,{className:"hljs-regexp",children:"/password/i"}),").",n(s.span,{className:"hljs-title function_",children:"type"}),"(",n(s.span,{className:"hljs-string",children:'"password123"'}),`);
    cy.`,n(s.span,{className:"hljs-title function_",children:"findByText"}),"(",n(s.span,{className:"hljs-regexp",children:"/log in/i"}),").",n(s.span,{className:"hljs-title function_",children:"click"}),`();
    cy.`,n(s.span,{className:"hljs-title function_",children:"url"}),"().",n(s.span,{className:"hljs-title function_",children:"should"}),"(",n(s.span,{className:"hljs-string",children:'"include"'}),", ",n(s.span,{className:"hljs-string",children:'"/dashboard"'}),`);
    cy.`,n(s.span,{className:"hljs-title function_",children:"findByText"}),"(",n(s.span,{className:"hljs-regexp",children:"/welcome/i"}),").",n(s.span,{className:"hljs-title function_",children:"should"}),"(",n(s.span,{className:"hljs-string",children:'"exist"'}),`);
  });
});
`]})}),`
`,a(s.h2,{id:"conclusion",children:[n(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#conclusion",children:n(s.span,{className:"icon icon-link"})}),"Conclusion"]}),`
`,n(s.p,{children:"React development continues to evolve, with a focus on simplicity, reusability, and performance. By following these best practices, you'll create React applications that are maintainable, performant, and enjoyable to work with."}),`
`,n(s.p,{children:"The ecosystem is constantly changing, so stay updated with the React documentation and community discussions to keep your skills sharp in the ever-evolving frontend landscape."})]})}function r(e={}){const{wrapper:s}=e.components||{};return s?n(s,{...e,children:n(l,{...e})}):l(e)}export{r as default};
