import React from 'react';

const FaqComponent = () => {
    return (
      <div>
        <div className="flex items-center justify-center  ">
          <div className="bg-white">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
              <h2 className="text-2xl font-semibold">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 mb-8 text-gray-600">
                React Interview Questions And Answers
              </p>
              <div className="space-y-4">
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                  <summary className="px-4 py-6">
                    When should you use context API?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    Context API is a useful tool for managing state and sharing
                    data between components in a more efficient and scalable way
                    <br />
                    We should consider using the Context API in the following
                    situations:
                    <li>
                      When data that needs to be accessed by many components at
                      different levels of the component tree, and you don't want
                      to pass down props to every level.
                    </li>
                    <li>
                      When data that needs to be updated in one place and the
                      changes need to be reflected in all components that
                      consume that data.
                    </li>
                    <li>
                      When you want to avoid "prop drilling," which is the
                      practice of passing props through many levels of the
                      component tree, even when some of those levels don't need
                      the data.
                    </li>
                  </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                  <summary className="px-4 py-6">
                    What is a custom hook?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    Custom Hook is a JavaScript function which we create by
                    ourselves, when we want to share logic between other
                    JavaScript functions <br />
                    start with the key word use call other hooks
                  </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                  <summary className="px-4 py-6">What is useRef?</summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    The useRef hook is the new addition in React 16.8. The
                    useRef hook allows to directly create a reference to the DOM
                    element in the functional component.
                    <br />
                    Syntax: const refContainer = useRef(initialValue); <br />{" "}
                    The useRef returns a mutable ref object.
                  </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                  <summary className="px-4 py-6">What is useMemo?</summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                    useMemo is a React hook that is used to memoize the result
                    of a function call. It is used to optimize the performance
                    of a React component by caching the result of a
                    computationally expensive function, so that it doesn't have
                    to be re-computed every time the component is re-rendered.
                    The basic syntax of useMemo hook : <br />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmYAAAAsCAYAAADPcHSpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABFZSURBVHhe7ZwLrFXVmccXIg+pcAHhIi9BCiMFlb5CB5RIlKkOTjUzODZjI6ZCSltroklbKYlOR+ODthk1TmfaFGjA1ESjdWImHTNVg6HolDqTqEBRHtLyqkDFi4jggzv7t+7+9l13u88++zwud1/m/0tWzj177b322muvtb7/+r51bh/nXHuUhBBCCCFED3Na/CmEEEIIIXoYCTMhhBBCiJIgYSaEEEIIURIkzIQQQgghSoKEmRBCCCFESZAwE0IIIYQoCRJmQgghhBAlQcJMCCGEEKIkSJgJIYQQQpQECTMhhBBCiJIgYSaEEEIIURIkzIQQQgghSoKEmRBCCCFESZAwE0IIIYQoCRJmQgghhBAlQcKsB3jmmWdce3u7W7FiRXyk+dx5553uwIED7vrrr4+P1A9lHD582Nf5+PHjvmxRHuhPmzZtir91hXdHPwjfGcd2797dlL4hTn2+ftYYd/j8Oe6yM4fFR3oeqxPp/jGT46PNJ2v8dBeXXnqpH5d5doF6bN++3Z/bbOz+zPOkSnNKs+F5uW/eM1GXSvU6FeezXivMhs9e4KYse9z1HdQSHxGVwHBndfwiAwIefvhhN2TIELdw4UIv0ITzRio0VoNO6+senzDdJ/4+WfAOZ86c6e677774SCe813vvvde9/PLL7o477oiPdrzPLVu2+Lxq7150ggBAENTKBQM/4d741F8mQoL00pTPudbT+8Vn/P+C5+b500LPxlARAfiTP+91Qzauc9/dtz0+0nwqjZ+ehHocO3bMPfTQQ/GR5rNy5UrXp08fN3369PhIz0NdqNOzzz4bH+nkVJzP5DHrAebNm+c72eLFi+Mj3csLL7zghdXcuXPjIx3MmjXLd+jnnnsuPiKKMmXAGe53R9/xn/DJ/gPdsL793OETH/nvJwNWiNdee6177LHH/OSUZtmyZf7znnvu8Z8h9MG2trbknGZxKq5em8G24++5yVv+24sJ0ue3/o/b/+EHcW65MRH07JFD8ZHG4LnXvdvm/mbIWfGRDhhDLX1Pd68eOxIf6Vnyxk9PcvPNN7uWlpZujbj0NrprPuspGhJmeKvwWl3441d9mnbfWtd/xHifxyffLS/0bpHHd7xe59+/4WP5QJ5dSxpzzW3++OBPzfbXjPvK990ZY89z03/4G58f3rsSqGncwOvXr09couYiDTu5hRpJeIjMyHAO12N4COk99dRT/jP0OuFq5phdH7pdKadSSJDrKceusxTWK7yeRD1DONfybr/9djdgwAB/fO3atf662bNn++9AWa2trV602few7LS7OI90KI3nCsOo6WerpexGYGX+60kzvMfCSHs9zPNlKe0RCUMmaS/H+qNt7rwBg/xK/8IzznSrDu1z4/sNcGee1jGswrLxmFg9KAPPwJ1nn+vzvjNyvP+ePof72fVZnrgbbrjB7dq1K1Pg0/YzZsxwq1atqii8n3jiCX+OvadmYKtX+mI94R/zmthzp9uc92d5YXvR1qvGT03a8SvDRvlPazdrc87jeLpNec9hSIxy6TtcZ31g0fDR7gejP5ncPzw//b7S/agS9rxhXazf8Fmt3mDnk8I2Aephz2bncL5h97e8sL3DZ0qXa3lhWelj6bLD9vqPw392cz7RktwLLoq+bzz2biJYw+cihffKgzJrGffpZ4O88ZOez8L5vxkwL9tczGd6fFKfp59+2l1xxRVNvW81QvtCCm1TM7jrrruSstO2rQh585nZ5XrK7QnqFmaIqEm3rHQfth10r9x0gU+bl8517x/c5fMmfO1+9/ZL/+mPb/rOxf6ac7663H9CvyEj3NlX3exev3uB2/KP8/33lk/P83kIrNYvLnJv/MuSpOy9j3dc+87vX3Abb53pdv/i++69Pa/5ssN7VwOxMmHCBPfggw+6yZMnu3379nn3KN4joLMRGiJsh1drw4YNXVykkyZN8oNi27Zt3gNFCIky+ZsOccstt3jjxLWUMX78+KQzcLxSSJDBNm7cOH8dCXfy5s2bE6PL/akH9bGyqacNDjoe3hM6N/l80hGBsjGWU6dOTZ7jkksu8fmINliyZIm76aabutS7WQMPtzurGcq+7LLL/GqvDAOECXxp6znuom3/m3gy8A4YTN6LI2Nsno4Vb+1z/zr2LxKjuPeD4+6dEx/5SX3M6f29V8TgGEbcyl686zX380g4mCGa2H+gGxyV87c7N7rbR010/xbd99+jsYRxonzuw/249uzNHeL57kjIGbxH3ueLL74YH+lK+v1mQR7ncG4zYfVKX2dxUEsf4rnX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"
                      alt=""
                    />
                    The useMemo hook takes two arguments: A function that
                    computes the value that needs to be memoized. A dependency
                    array of values that the memoized value depends on
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FaqComponent;