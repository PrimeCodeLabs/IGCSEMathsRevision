const modelAnswers = `
        <button class="btn btn-secondary mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#pdfViewer" aria-expanded="false" aria-controls="pdfViewer">
          Show Model Answers
        </button>
        <div class="collapse mt-2" id="pdfViewer">
          <div class="card card-body">
            <!-- Scrollable container for the PDF page -->
            <div id="pdf-container" style="max-height: 600px; overflow-y: auto;">
              <canvas id="pdf-canvas" style="width: 100%; border: 1px solid #ddd;"></canvas>
            </div>
            <!-- Navigation controls -->
            <div id="pdf-navigation" class="mt-2 text-center" style="display: none;">
              <button class="btn btn-sm btn-outline-secondary" onclick="prevPage()">Previous</button>
              <span id="pdf-page-display" class="mx-2"></span>
              <button class="btn btn-sm btn-outline-primary" onclick="nextPage()">Next</button>
            </div>
          </div>
        </div>
`;

const lessons = {
  compound: {
    title: "Compound Interest, Depreciation & Profits",
    content: `
        <div class="lesson">
          <h2>Compound Interest</h2>
          <p>
            <strong>What it is:</strong> Compound interest means that interest is calculated not only on the original principal but also on the interest that has been added over time. This "interest on interest" effect accelerates the growth of your investment.
          </p>
          <p>
            <strong>Formula:</strong> $$A = P \\times \\Bigl(1 + \\frac{r}{n}\\Bigr)^{n \\times t}$$
          </p>
          <ul>
            <li><strong>$A$</strong>: Final amount (the total after interest)</li>
            <li><strong>$P$</strong>: Principal (the initial amount invested or borrowed)</li>
            <li><strong>$r$</strong>: Annual interest rate (in decimal form; e.g. 5% becomes 0.05)</li>
            <li><strong>$n$</strong>: Number of compounding periods per year</li>
            <li><strong>$t$</strong>: Time in years</li>
          </ul>
          <p><strong>Step-by-Step Explanation:</strong></p>
          <ol>
            <li><em>Identify the values:</em> Determine $P$, $r$, $n$, and $t$.</li>
            <li><em>Convert the rate:</em> Change the percentage rate into a decimal.</li>
            <li><em>Plug in:</em> Substitute these values into the formula.</li>
            <li><em>Calculate:</em> Compute the exponent first, then multiply by $P$.</li>
          </ol>
          <div class="example">
            <h3>Example 1</h3>
            <p>Investing £1000 at an annual rate of 5% compounded annually ($n = 1$) for 3 years:</p>
            <ol>
              <li>$P = £1000$, $r = 0.05$, $n = 1$, $t = 3$</li>
              <li>Substitute into the formula: $$A = 1000 \\times (1 + 0.05)^3 = 1000 \\times (1.05)^3$$</li>
              <li>Calculate: $(1.05)^3 \\approx 1.15763$</li>
              <li>$A \\approx 1000 \\times 1.15763 \\approx £1157.63$</li>
            </ol>
          </div>
          <div class="example">
            <h3>Example 2 (Continuous Compounding)</h3>
            <p>Investing £2000 at an annual rate of 6% compounded continuously for 5 years:</p>
            <ol>
              <li>$P = £2000$, $r = 0.06$, $t = 5$</li>
              <li>Use the continuous compounding formula: $$A = P \\times e^{(r \\times t)}$$</li>
              <li>Calculation: $$A = 2000 \\times e^{0.3} \\approx 2000 \\times 1.34986 \\approx £2699.72$$</li>
            </ol>
          </div>
          <div class="example">
            <h3>Example 3 (Variable Interest Rates)</h3>
            <p>
              Katy invests £2000 in a savings account for 3 years. The account pays compound interest at an annual rate of 2.5% for the first year and 
              $x\%$ for both the second and third years. If the total amount at the end of 3 years is £2124.46, find the value of $x$:
            </p>
            <ol>
              <li>
                <em>Step 1:</em> Calculate the amount after the first year:<br>
                $P = £2000$, $r = 0.025$, $t = 1$<br>
                Amount after first year: $$2000 \\times 1.025 = £2050$$
              </li>
              <li>
                <em>Step 2:</em> Set up the equation for the remaining two years:<br>
                $$2050 \\times (1 + \\frac{x}{100})^2 = 2124.46$$
              </li>
              <li>
                <em>Step 3:</em> Solve for $x$: <br>
                $$ (1 + \\frac{x}{100})^2 = \\frac{2124.46}{2050} \\approx 1.03637 $$<br>
                Taking the square root: $$1 + \\frac{x}{100} \\approx \\sqrt{1.03637} \\approx 1.0180$$<br>
                So, $$\\frac{x}{100} \\approx 0.0180 \\quad \\Rightarrow \\quad x \\approx 1.8\\%$$
              </li>
              <li>
                <em>Step 4:</em> Verify the answer:<br>
                Year 1: $$2000 \\times 1.025 = £2050$$<br>
                Year 2: $$2050 \\times 1.018 = £2086.90$$<br>
                Year 3: $$2086.90 \\times 1.018 \\approx £2124.47$$ (slight rounding difference)
              </li>
            </ol>
          </div>
          <div class="example">
            <h3>Example 4 (Comparing Investment Options)</h3>
            <p>Anil wants to invest £25000 for 3 years and is comparing two banks:</p>
            <ul>
              <li>Personal Bank offers 2% compound interest each year</li>
              <li>Secure Bank offers 4.3% for the first year and 0.9% for each year after that</li>
            </ul>
            <ol>
              <li>
                <em>Step 1:</em> Calculate the final amount with Personal Bank:<br>
                $$P = £25000, \\; r = 0.02, \\; t = 3$$<br>
                $$\\text{Final amount} = 25000 \\times (1 + 0.02)^3 = 25000 \\times 1.061208 = £26530.20$$
              </li>
              <li>
                <em>Step 2:</em> Calculate the final amount with Secure Bank year by year:<br>
                Year 1: $$25000 \\times (1 + 0.043) = 25000 \\times 1.043 = £26075$$<br>
                Year 2: $$26075 \\times (1 + 0.009) = 26075 \\times 1.009 = £26309.68$$<br>
                Year 3: $$26309.68 \\times (1 + 0.009) = 26309.68 \\times 1.009 = £26546.47$$
              </li>
              <li>
                <em>Step 3:</em> Compare the final amounts:<br>
                Personal Bank: £26530.20<br>
                Secure Bank: £26546.47<br>
                Secure Bank gives £16.27 more interest over the 3 years.
              </li>
            </ol>
          </div>
          <div class="example">
            <h3>Example 5 (Finding Unknown Interest Rate from Final Amount)</h3>
            <p>
              Naoby invests £6000 for 5 years at a compound interest rate of $x\%$ per annum. At the end of 5 years, the investment is worth £8029.35. Find the value of $x$.
            </p>
            <ol>
              <li>
                <em>Step 1:</em> Set up the equation using the compound interest formula:<br>
                $$8029.35 = 6000 \\times (1 + \\frac{x}{100})^5$$
              </li>
              <li>
                <em>Step 2:</em> Rearrange to isolate $(1 + \\frac{x}{100})^5$: <br>
                $$(1 + \\frac{x}{100})^5 = \\frac{8029.35}{6000} \\approx 1.33823$$
              </li>
              <li>
                <em>Step 3:</em> Take the 5th root of both sides:<br>
                $$1 + \\frac{x}{100} \\approx \\sqrt[5]{1.33823} \\approx 1.06$$
              </li>
              <li>
                <em>Step 4:</em> Solve for $x$: <br>
                $$\\frac{x}{100} \\approx 0.06 \\quad \\Rightarrow \\quad x \\approx 6\\%$$
              </li>
              <li>
                <em>Step 5:</em> Verify:<br>
                $$6000 \\times (1 + 0.06)^5 \\approx 6000 \\times 1.33823 = £8029.35$$
              </li>
            </ol>
          </div>
          <div class="example">
            <h3>Example 6 (Variable Interest Rates with Fractions)</h3>
            <p>
              Jean invests £12000 in an account paying compound interest for 2 years. In the first year, the rate of interest is $x\%$. At the end of the first year, the value of Jean's investment is £12336. In the second year, the rate of interest is $x/2\%$. What is the value of Jean's investment at the end of 2 years?
            </p>
            <ol>
              <li>
                <em>Step 1:</em> Find the value of $x$ using the first year's information:<br>
                $$12336 = 12000 \\times (1 + \\frac{x}{100})$$<br>
                $$1 + \\frac{x}{100} = \\frac{12336}{12000} \\approx 1.028$$<br>
                $$\\frac{x}{100} \\approx 0.028 \\quad \\Rightarrow \\quad x \\approx 2.8\\%$$
              </li>
              <li>
                <em>Step 2:</em> Calculate the second year's interest rate:<br>
                $$\\text{Second year rate} = \\frac{x}{2} = \\frac{2.8}{2} = 1.4\\%$$
              </li>
              <li>
                <em>Step 3:</em> Calculate the final amount:<br>
                Year 1 amount: £12336<br>
                Year 2: $$12336 \\times (1 + 0.014) \\approx £12508.70$$
              </li>
            </ol>
          </div>
          <div class="example">
            <h3>Example 7 (Reverse Percentage)</h3>
            <p>
              Katy goes to work by train. The cost of her weekly train ticket increases by 12.5% to £225. Work out the cost of her weekly train ticket before this increase.
            </p>
            <ol>
              <li>Let the original cost be $P$.</li>
              <li>An increase of 12.5% means the new cost is: $$P \\times (1 + 0.125) = 1.125 \\times P$$</li>
              <li>Set up the equation: $$1.125 \\times P = 225$$</li>
              <li>Solve for $P$: $$P = \\frac{225}{1.125} = 200$$</li>
              <li>The original cost of the weekly train ticket is £200.</li>
            </ol>
          </div>
        </div>
        <div class="lesson">
          <h2>Depreciation</h2>
          <p>
            <strong>What it is:</strong> Depreciation is the reduction in the value of an asset over time. The <em>straight-line method</em> assumes the asset loses the same amount of value each year, while <em>reducing balance depreciation</em> decreases the value by a fixed percentage each year.
          </p>
          <p>
            <strong>Formula (Straight-Line):</strong> $$\\text{Depreciation per year} = \\frac{\\text{Initial Value} - \\text{Residual Value}}{\\text{Useful Life}}$$
          </p>
          <p><strong>Step-by-Step Explanation (Straight-Line):</strong></p>
          <ol>
            <li><em>Determine the values:</em> Identify the asset's initial cost, its residual value, and its useful life.</li>
            <li><em>Calculate the loss:</em> Subtract the residual value from the initial cost.</li>
            <li><em>Divide evenly:</em> Divide the total loss by the number of years to obtain the annual depreciation.</li>
          </ol>
          <div class="example">
            <h3>Example 1</h3>
            <p>An asset costing £5000, with a residual value of £500, used for 5 years:</p>
            <ol>
              <li>Loss = $5000 - 500 = £4500$</li>
              <li>Depreciation per year = $$\\frac{4500}{5} = £900$$</li>
            </ol>
          </div>
          <p>
            <strong>Reducing Balance Depreciation:</strong> For assets that depreciate by a fixed percentage annually, the value is calculated as: 
            <br>$$\\text{Final Value} = \\text{Initial Value} \\times (1 - r)^n$$
          </p>
          <div class="example">
            <h3>Example 2</h3>
            <p>A vehicle costing £20000 depreciates at a rate of 20% per year. Find its value after 4 years:</p>
            <ol>
              <li>
                Depreciation rate: $r = 20\\% = 0.20$, so multiplier: $$1 - 0.20 = 0.80$$
              </li>
              <li>
                Calculation: $$\\text{Value} = 20000 \\times (0.80)^4 \\approx 20000 \\times 0.4096 \\approx £8192.00$$
              </li>
            </ol>
          </div>
          <div class="example">
            <h3>Example 3 (Depreciation Threshold Problem - Alternative Method)</h3>
            <p>
              Jack bought a new boat for £12500. The value of the boat at the end of $n$ years is given by: $$V = 12500 \\times (0.85)^n.$$ 
              At the end of how many years will the value of Jack's boat first be less than 50% of its original value?
            </p>
            <ol>
              <li>
                <em>Step 1:</em> Calculate 50% of the original value: $$0.5 \\times 12500 = 6250.$$
              </li>
              <li>
                <em>Step 2:</em> Iteratively compute the value each year:
                <ul>
                  <li>Year 0: $V = 12500$</li>
                  <li>Year 1: $$V = 12500 \\times 0.85 = 10625$$</li>
                  <li>Year 2: $$V = 10625 \\times 0.85 \\approx 9021.25$$</li>
                  <li>Year 3: $$V = 9021.25 \\times 0.85 \\approx 7668.06$$</li>
                  <li>Year 4: $$V = 7668.06 \\times 0.85 \\approx 6517.85$$</li>
                  <li>Year 5: $$V = 6517.85 \\times 0.85 \\approx 5540.17$$</li>
                </ul>
              </li>
              <li>
                <em>Step 3:</em> Identify the first year when $V$ falls below £6250. In this case, after 5 years, $V \\approx 5540.17.$
              </li>
              <li>
                <em>Step 4:</em> Therefore, the boat's value first falls below 50% of its original value after 5 years.
              </li>
            </ol>
          </div>
          <p>
            <em>Tip:</em> When calculating reducing balance depreciation, always subtract the depreciation rate from 100% to determine the correct multiplier (e.g., for 15% depreciation, multiplier = 0.85). Avoid using the rate directly.
          </p>
        </div>
        <div class="lesson">
          <h2>Profits</h2>
          <p>
            <strong>What it is:</strong> Profit is the financial gain that remains after subtracting total costs from total revenue. It indicates the efficiency and success of a business.
          </p>
          <p>
            <strong>Formula:</strong> $$\\text{Profit} = \\text{Revenue} - \\text{Cost}$$
          </p>
          <p><strong>Step-by-Step Explanation:</strong></p>
          <ol>
            <li><em>Identify revenue:</em> Determine the total income from sales.</li>
            <li><em>Identify costs:</em> Sum up all the expenses incurred (including fixed and variable costs).</li>
            <li><em>Subtract:</em> Deduct the total cost from the total revenue to obtain profit.</li>
          </ol>
          <div class="example">
            <h3>Example 1</h3>
            <p>If revenue is £2000 and costs are £1500:</p>
            <ol>
              <li>Revenue = £2000</li>
              <li>Cost = £1500</li>
              <li>Profit = £2000 – £1500 = £500</li>
            </ol>
          </div>
          <div class="example">
            <h3>Example 2</h3>
            <p>A company sells 150 units of a product at £25 each, and the total production cost is £3000. What is the profit?</p>
            <ol>
              <li>Revenue = $$150 \\times 25 = £3750$$</li>
              <li>Profit = $$3750 - 3000 = £750$$</li>
            </ol>
          </div>
          <p>
            <em>Tip:</em> Ensure you account for all costs, including hidden expenses, when calculating profit. A clear breakdown of revenue and cost items helps in accurate profit analysis.
          </p>
          <p>
            <em>For further revision:</em>
            <a href="https://www.physicsandmathstutor.com/maths-revision/gcse-ratio-proportion-and-rates-of-change/questions-edexcel/higher-compound-interest-videos/" target="_blank">
              Compound Interest (H) Questions by Topic
            </a>
          </p>
        ${modelAnswers}
        </div>
      `,
  },
  quadraticEquation: {
    title: "Solving Quadratic Equations",
    content: `
      <div class="lesson">
        <h2>Quadratic Equations: Quadratic Formula</h2>
        <p>
          <strong>Definition:</strong> The quadratic formula can be used to solve any quadratic equation of the form 
          $$ax^2 + bx + c = 0.$$ 
        </p>
        <p>
          <strong>Formula:</strong> 
          $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$
        </p>
        <p><strong>Step-by-Step Method:</strong></p>
        <ol>
          <li><em>Identify coefficients:</em> Determine $$a, b, c$$ by comparing your equation to the standard form $$ax^2 + bx + c = 0.$$</li>
          <li><em>Compute the discriminant:</em> Calculate $$\\Delta = b^2 - 4ac.$$ This tells you the nature of the roots (real and distinct, real and repeated, or complex).</li>
          <li><em>Evaluate the square root:</em> Find $$\\sqrt{\\Delta}.$$ If $$\\Delta < 0,$$ you will deal with imaginary numbers.</li>
          <li><em>Substitute and simplify:</em> Plug these values into the quadratic formula and simplify to obtain the solution(s) for $$x$$.</li>
        </ol>
  
        <div class="example">
          <h3>Example 1: Two Distinct Real Roots</h3>
          <p>Solve $$2x^2 + 4x - 6 = 0.$$</p>
          <ol>
            <li>
              <strong>Identify the coefficients:</strong> 
              <br />
              By comparing $$2x^2 + 4x - 6 = 0$$ with $$ax^2 + bx + c = 0,$$ 
              we see that $$a = 2, b = 4, c = -6.$$ 
            </li>
            <li>
              <strong>Compute the discriminant:</strong> 
              <br />
              Use $$\\Delta = b^2 - 4ac.$$ Here, 
              $$\\Delta = 4^2 - 4 \\times 2 \\times (-6) = 16 + 48 = 64.$$ 
              Since $$\\Delta > 0,$$ we expect two distinct real solutions.
            </li>
            <li>
              <strong>Substitute into the quadratic formula:</strong>
              <br />
              $$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a} = \\frac{-4 \\pm \\sqrt{64}}{2 \\times 2} = \\frac{-4 \\pm 8}{4}.$$ 
              We used $$b = 4,$$ $$\\Delta = 64,$$ and $$a = 2.$$ 
              Simplifying, we get 
              $$x = \\frac{-4 \\pm 8}{4}.$$
            </li>
            <li>
              <strong>Simplify to find the roots:</strong>
              <br />
              Consider the two cases:
              <ul>
                <li>
                  $$x = \\frac{-4 + 8}{4} = \\frac{4}{4} = 1.$$
                </li>
                <li>
                  $$x = \\frac{-4 - 8}{4} = \\frac{-12}{4} = -3.$$
                </li>
              </ul>
              Therefore, the solutions are 
              $$x = 1 \\text{ and } x = -3.$$
            </li>
          </ol>
        </div>
  
        <div class="example">
          <h3>Example 2: Repeated Root</h3>
          <p>Solve $$x^2 - 4x + 4 = 0.$$</p>
          <ol>
            <li>
              <strong>Identify the coefficients:</strong> 
              <br />
              By comparing $$x^2 - 4x + 4 = 0$$ with $$ax^2 + bx + c = 0,$$
              we see that $$a = 1, b = -4, c = 4.$$ 
            </li>
            <li>
              <strong>Compute the discriminant:</strong> 
              <br />
              $$\\Delta = b^2 - 4ac = (-4)^2 - 4 \\times 1 \\times 4 = 16 - 16 = 0.$$ 
              A zero discriminant means there will be a single unique solution (repeated root).
            </li>
            <li>
              <strong>Substitute into the quadratic formula:</strong> 
              <br />
              $$x = \\frac{-(-4) \\pm \\sqrt{0}}{2 \\times 1} = \\frac{4 \\pm 0}{2} = 2.$$ 
              Since the square root of 0 is 0, both solutions are the same.
            </li>
            <li>
              <strong>Interpret the solution:</strong> 
              <br />
              There is one repeated real root: 
              $$x = 2.$$ 
            </li>
          </ol>
        </div>
  
        <div class="example">
          <h3>Example 3: Two Distinct Real Roots (Simple Numbers)</h3>
          <p>Solve $$x^2 + 3x - 10 = 0.$$</p>
          <ol>
            <li>
              <strong>Identify the coefficients:</strong>
              <br />
              By comparing $$x^2 + 3x - 10 = 0$$ with $$ax^2 + bx + c = 0,$$ 
              we have $$a = 1, b = 3, c = -10.$$
            </li>
            <li>
              <strong>Compute the discriminant:</strong>
              <br />
              $$\\Delta = b^2 - 4ac = 3^2 - 4 \\times 1 \\times (-10) = 9 + 40 = 49.$$ 
              Because $$\\Delta = 49 > 0,$$ we again expect two distinct real solutions.
            </li>
            <li>
              <strong>Substitute into the quadratic formula:</strong>
              <br />
              $$x = \\frac{-3 \\pm \\sqrt{49}}{2 \\times 1} = \\frac{-3 \\pm 7}{2}.$$ 
              Simplifying the square root gives 
              $$\\sqrt{49} = 7.$$
            </li>
            <li>
              <strong>Simplify to find the roots:</strong>
              <br />
              <ul>
                <li>
                  $$x = \\frac{-3 + 7}{2} = \\frac{4}{2} = 2.$$
                </li>
                <li>
                  $$x = \\frac{-3 - 7}{2} = \\frac{-10}{2} = -5.$$
                </li>
              </ul>
              Thus, the solutions are 
              $$x = 2 \\text{ and } x = -5.$$
            </li>
          </ol>
        </div>
  
        <div class="example">
          <h3>Example 4: Complex Roots</h3>
          <p>Solve $$x^2 + 2x + 5 = 0.$$</p>
          <ol>
            <li>
              <strong>Identify the coefficients:</strong>
              <br />
              By comparing $$x^2 + 2x + 5 = 0$$ with $$ax^2 + bx + c = 0,$$
              we get $$a = 1, b = 2, c = 5.$$
            </li>
            <li>
              <strong>Compute the discriminant:</strong>
              <br />
              $$\\Delta = b^2 - 4ac = 2^2 - 4 \\times 1 \\times 5 = 4 - 20 = -16.$$ 
              Since $$\\Delta < 0,$$ we have complex (imaginary) solutions.
            </li>
            <li>
              <strong>Substitute into the quadratic formula:</strong>
              <br />
              $$x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a} = \\frac{-2 \\pm \\sqrt{-16}}{2} = \\frac{-2 \\pm 4i}{2} = -1 \\pm 2i.$$ 
              Here, $$\\sqrt{-16} = 4i.$$
            </li>
          </ol>
        </div>
        
        <h2>Solving by Factoring/Factorising</h2>
        <p>
          <strong>Definition:</strong> Factoring involves rewriting the quadratic expression as a product of two binomials.
          When the product equals zero, either (or both) of the factors must be zero.
        </p>
        <p><strong>Step-by-Step Method:</strong></p>
        <ol>
          <li><em>Write in standard form:</em> Ensure the equation is in the form $$ax^2 + bx + c = 0.$$</li>
          <li><em>Factor the expression:</em> Find factors $$p$$ and $$q$$ such that $$ax^2 + bx + c = (dx + p)(ex + q)$$, where $$de = a$$ and $$p \\cdot q = c$$ and $$p \\cdot e + q \\cdot d = b$$.</li>
          <li><em>Apply the zero product property:</em> If $$(dx + p)(ex + q) = 0$$, then either $$dx + p = 0$$ or $$ex + q = 0$$ (or both).</li>
          <li><em>Solve each factor:</em> Solve the resulting linear equations $$dx + p = 0$$ and $$ex + q = 0$$ to find all solutions.</li>
        </ol>
        
        <div class="example">
          <h3>Example 1: Factoring with Integer Roots</h3>
          <p>Solve $$x^2 - 5x + 6 = 0.$$</p>
          <ol>
            <li>
              <strong>Write in standard form:</strong> 
              <br />
              The equation $$x^2 - 5x + 6 = 0$$ is already in standard form $$ax^2 + bx + c = 0,$$ 
              where $$a = 1, b = -5, c = 6.$$ 
            </li>
            <li>
              <strong>Factor the expression:</strong> 
              <br />
              We need to find factors $$p$$ and $$q$$ such that $$p \cdot q = 6$$ and $$p + q = 5$$.
              <br />
              The factors of 6 are: 1 and 6, 2 and 3.
              <br />
              Checking: 1 + 6 = 7, 2 + 3 = 5.
              <br />
              Since 2 + 3 = 5, we use $$p = 2$$ and $$q = 3$$.
              <br />
              Therefore, $$x^2 - 5x + 6 = (x - 2)(x - 3)$$.
            </li>
            <li>
              <strong>Apply the zero product property:</strong> 
              <br />
              $$(x - 2)(x - 3) = 0$$ implies either $$x - 2 = 0$$ or $$x - 3 = 0$$.
            </li>
            <li>
              <strong>Solve each factor:</strong> 
              <br />
              From $$x - 2 = 0$$, we get $$x = 2$$.
              <br />
              From $$x - 3 = 0$$, we get $$x = 3$$.
              <br />
              Therefore, the solutions are $$x = 2$$ and $$x = 3$$.
            </li>
          </ol>
        </div>
        
        <div class="example">
          <h3>Example 2: Factoring with a Leading Coefficient</h3>
          <p>Solve $$2x^2 + 7x + 3 = 0.$$</p>
          <ol>
            <li>
              <strong>Write in standard form:</strong> 
              <br />
              The equation $$2x^2 + 7x + 3 = 0$$ is already in standard form $$ax^2 + bx + c = 0,$$ 
              where $$a = 2, b = 7, c = 3.$$ 
            </li>
            <li>
              <strong>Factor the expression:</strong> 
              <br />
              Since $$a = 2$$, we look for factors in the form $$(2x + p)(x + q)$$ or $$(x + p)(2x + q)$$.
              <br />
              We need $$p \\cdot q = 3$$ and $$2q + p = 7$$ (or $$q + 2p = 7$$).
              <br />
              The factors of 3 are: 1 and 3.
              <br />
              Let's try $$(2x + 3)(x + 1)$$:
              <br />
              Here, $$p = 3$$ and $$q = 1$$, so $$2q + p = 2 \\cdot 1 + 3 = 5$$, which doesn't equal 7.
              <br />
              Let's try $$(2x + 1)(x + 3)$$:
              <br />
              Here, $$p = 1$$ and $$q = 3$$, so $$2q + p = 2 \\cdot 3 + 1 = 7$$, which equals 7!
              <br />
              Therefore, $$2x^2 + 7x + 3 = (2x + 1)(x + 3)$$.
            </li>
            <li>
              <strong>Apply the zero product property:</strong> 
              <br />
              $$(2x + 1)(x + 3) = 0$$ implies either $$2x + 1 = 0$$ or $$x + 3 = 0$$.
            </li>
            <li>
              <strong>Solve each factor:</strong> 
              <br />
              From $$2x + 1 = 0$$, we get $$x = -\\frac{1}{2}$$.
              <br />
              From $$x + 3 = 0$$, we get $$x = -3$$.
              <br />
              Therefore, the solutions are $$x = -\\frac{1}{2}$$ and $$x = -3$$.
            </li>
          </ol>
        </div>
        
        <h2>Completing the Square</h2>
        <p>
          <strong>Definition:</strong> Completing the square transforms a quadratic expression into the form $$a(x + p)^2 + q$$,
          which makes it easier to find the roots and other properties of the quadratic function.
        </p>
        <p><strong>Step-by-Step Method:</strong></p>
        <ol>
          <li><em>Ensure the leading coefficient is 1:</em> If $$a \\neq 1$$, divide the entire equation by $$a$$ first.</li>
          <li><em>Rearrange to isolate the variable terms:</em> Move the constant term to the right side of the equation.</li>
          <li><em>Complete the square:</em> Add and subtract $$\\left(\\frac{b}{2}\\right)^2$$ to the left side to form a perfect square trinomial.</li>
          <li><em>Rewrite as a squared binomial:</em> Express the left side as $$(x + \\frac{b}{2})^2$$.</li>
          <li><em>Solve for the variable:</em> Take the square root of both sides and solve for $$x$$.</li>
        </ol>
        
        <div class="example">
          <h3>Example 1: Completing the Square with Leading Coefficient 1</h3>
          <p>Solve $$x^2 + 6x + 8 = 0.$$</p>
          <ol>
            <li>
              <strong>Ensure the leading coefficient is 1:</strong> 
              <br />
              The leading coefficient is already 1, so no need to divide.
            </li>
            <li>
              <strong>Rearrange to isolate the variable terms:</strong> 
              <br />
              $$x^2 + 6x = -8$$
            </li>
            <li>
              <strong>Complete the square:</strong> 
              <br />
              For the term $$x^2 + 6x$$, calculate $$\\left(\\frac{b}{2}\\right)^2 = \\left(\\frac{6}{2}\\right)^2 = 3^2 = 9$$.
              <br />
              Add and subtract this value on the left side:
              <br />
              $$x^2 + 6x + 9 - 9 = -8$$
              <br />
              $$x^2 + 6x + 9 = -8 + 9$$
              <br />
              $$x^2 + 6x + 9 = 1$$
            </li>
            <li>
              <strong>Rewrite as a squared binomial:</strong> 
              <br />
              $$x^2 + 6x + 9 = (x + 3)^2$$
              <br />
              Therefore, $$(x + 3)^2 = 1$$
            </li>
            <li>
              <strong>Solve for the variable:</strong> 
              <br />
              Take the square root of both sides:
              <br />
              $$x + 3 = \\pm 1$$
              <br />
              $$x = -3 \\pm 1$$
              <br />
              $$x = -2$$ or $$x = -4$$
              <br />
              Therefore, the solutions are $$x = -2$$ and $$x = -4$$.
            </li>
          </ol>
        </div>
        
        <div class="example">
          <h3>Example 2: Completing the Square with Leading Coefficient Not 1</h3>
          <p>Solve $$2x^2 - 12x + 10 = 0.$$</p>
          <ol>
            <li>
              <strong>Ensure the leading coefficient is 1:</strong> 
              <br />
              Divide all terms by 2:
              <br />
              $$x^2 - 6x + 5 = 0$$
            </li>
            <li>
              <strong>Rearrange to isolate the variable terms:</strong> 
              <br />
              $$x^2 - 6x = -5$$
            </li>
            <li>
              <strong>Complete the square:</strong> 
              <br />
              For the term $$x^2 - 6x$$, calculate $$\\left(\\frac{b}{2}\\right)^2 = \\left(\\frac{-6}{2}\\right)^2 = (-3)^2 = 9$$.
              <br />
              Add and subtract this value on the left side:
              <br />
              $$x^2 - 6x + 9 - 9 = -5$$
              <br />
              $$x^2 - 6x + 9 = -5 + 9$$
              <br />
              $$x^2 - 6x + 9 = 4$$
            </li>
            <li>
              <strong>Rewrite as a squared binomial:</strong> 
              <br />
              $$x^2 - 6x + 9 = (x - 3)^2$$
              <br />
              Therefore, $$(x - 3)^2 = 4$$
            </li>
            <li>
              <strong>Solve for the variable:</strong> 
              <br />
              Take the square root of both sides:
              <br />
              $$x - 3 = \\pm 2$$
              <br />
              $$x = 3 \\pm 2$$
              <br />
              $$x = 5$$ or $$x = 1$$
              <br />
              Therefore, the solutions are $$x = 5$$ and $$x = 1$$.
            </li>
          </ol>
        </div>
  
        <p><strong>Additional Tips:</strong></p>
        <ul>
          <li>If $$\\Delta > 0$$, there are two distinct real roots.</li>
          <li>If $$\\Delta = 0$$, there is one repeated real root.</li>
          <li>If $$\\Delta < 0$$, the solutions are complex numbers.</li>
        </ul>

      ${modelAnswers}
      </div>
    `,
  },
  completingTheSquare: {
    title: "Completing the Square",
    content: `
      <div class="lesson">
        <h2>Completing the Square</h2>
        <p>
          <strong>Overview:</strong> Completing the square transforms a quadratic expression of the form 
          $$ax^2 + bx + c$$ 
          into a perfect square trinomial. This method is useful for solving quadratic equations and for rewriting quadratic functions in vertex form, which helps in graphing by clearly identifying the vertex and intercepts.
        </p>
        <p><strong>Step-by-Step Method:</strong></p>
        <ol>
          <li><em>Write in standard form:</em> Ensure the equation is written as $$ax^2 + bx + c = 0$$ (for solving) or as a function $$ax^2 + bx + c$$ (for graphing).</li>
          <li><em>If necessary, divide by $$a$$:</em> When $$a \\neq 1$$, divide every term by $$a$$ so that the coefficient of $$x^2$$ is 1.</li>
          <li><em>Isolate the $$x$$-terms:</em> Rewrite the equation as $$x^2 + \\frac{b}{a}x = -\\frac{c}{a}$$ (for solving) or separate the constant term for graphing.</li>
          <li><em>Find half the coefficient of $$x$$:</em> Let $$d = \\frac{b}{2a}$$ and compute $$d^2.$$ This value is added and subtracted to complete the square.</li>
          <li><em>Add and subtract $$d^2$$:</em> Adjust the equation by adding and subtracting $$d^2$$ so that the left side becomes a perfect square trinomial.</li>
          <li><em>Rewrite as a perfect square:</em> Express the quadratic part as $$ (x + d)^2$$ or $$ (x - d)^2$$ if $$d$$ is negative), then adjust the constant term.</li>
          <li><em>Solve or analyze:</em> For equations, set the perfect square equal to the adjusted constant and solve for $$x$$. For graphing, rewrite in vertex form as $$a(x + d)^2 + k$$ so that the vertex is at $$(-d, k)$$.</li>
        </ol>
        <hr />
        <div class="example">
          <h3>Example 1: Solving by Completing the Square (Simple Equation)</h3>
          <p>Solve $$x^2 + 6x + 5 = 0$$ by completing the square.</p>
          <ol>
            <li>
              <strong>Isolate the $$x$$-terms:</strong>
              <br />Rewrite the equation as 
              $$x^2 + 6x = -5.$$ 
              This moves the constant term to the right side.
            </li>
            <li>
              <strong>Find half the coefficient of $$x$$:</strong>
              <br />Half of 6 is 3, so let $$d = 3$$ and compute 
              $$d^2 = 9.$$ 
            </li>
            <li>
              <strong>Add and subtract $$d^2$$:</strong>
              <br />Add and subtract 9 on the left side:
              $$x^2 + 6x + 9 = 9 - 5.$$ 
              This creates a perfect square trinomial.
            </li>
            <li>
              <strong>Rewrite as a perfect square:</strong>
              <br />The left side factors as 
              $$ (x + 3)^2,$$ 
              so the equation becomes 
              $$ (x + 3)^2 = 4.$$ 
            </li>
            <li>
              <strong>Solve for $$x$$:</strong>
              <br />Take the square root of both sides:
              $$x + 3 = \\pm 2,$$ 
              then solve to obtain 
              $$x = -3 \\pm 2,$$ which gives the solutions 
              $$x = -1$$ and $$x = -5.$$ 
            </li>
          </ol>
        </div>
        <hr />
        <div class="example">
          <h3>Example 2: Solving a Quadratic Equation with a Leading Coefficient ≠ 1</h3>
          <p>Solve $$3x^2 - 12x + 7 = 0$$ by completing the square.</p>
          <ol>
            <li>
              <strong>Divide by the leading coefficient:</strong>
              <br />Divide the equation by 3:
              $$x^2 - 4x + \\frac{7}{3} = 0.$$ 
            </li>
            <li>
              <strong>Isolate the $$x$$-terms:</strong>
              <br />Rewrite as 
              $$x^2 - 4x = -\\frac{7}{3}.$$ 
            </li>
            <li>
              <strong>Find half the coefficient of $$x$$:</strong>
              <br />Half of -4 is -2, so let $$d = -2$$ and compute 
              $$d^2 = 4.$$ 
            </li>
            <li>
              <strong>Add and subtract $$d^2$$:</strong>
              <br />Add and subtract 4:
              $$x^2 - 4x + 4 = 4 - \\frac{7}{3}.$$ 
            </li>
            <li>
              <strong>Simplify the constant:</strong>
              <br />Evaluate 
              $$4 - \\frac{7}{3} = \\frac{12}{3} - \\frac{7}{3} = \\frac{5}{3}.$$ 
            </li>
            <li>
              <strong>Rewrite as a perfect square:</strong>
              <br />The left side factors as 
              $$ (x - 2)^2,$$ 
              so the equation becomes 
              $$ (x - 2)^2 = \\frac{5}{3}.$$ 
            </li>
            <li>
              <strong>Solve for $$x$$:</strong>
              <br />Take the square root:
              $$x - 2 = \\pm \\sqrt{\\frac{5}{3}},$$ 
              hence 
              $$x = 2 \\pm \\sqrt{\\frac{5}{3}}.$$ 
            </li>
          </ol>
        </div>
        <hr />
        <div class="example">
          <h3>Example 3: Solving with Division and Completing the Square</h3>
          <p>Solve $$2x^2 + 8x + 6 = 0$$ by completing the square.</p>
          <ol>
            <li>
              <strong>Divide by the leading coefficient:</strong>
              <br />Divide the equation by 2:
              $$x^2 + 4x + 3 = 0.$$ 
            </li>
            <li>
              <strong>Isolate the $$x$$-terms:</strong>
              <br />Rewrite as 
              $$x^2 + 4x = -3.$$ 
            </li>
            <li>
              <strong>Find half the coefficient of $$x$$:</strong>
              <br />Half of 4 is 2, so let $$d = 2$$ and compute 
              $$d^2 = 4.$$ 
            </li>
            <li>
              <strong>Add and subtract $$d^2$$:</strong>
              <br />Add and subtract 4:
              $$x^2 + 4x + 4 = 4 - 3.$$ 
            </li>
            <li>
              <strong>Rewrite as a perfect square:</strong>
              <br />The left side factors as 
              $$ (x + 2)^2,$$ 
              yielding 
              $$ (x + 2)^2 = 1.$$ 
            </li>
            <li>
              <strong>Solve for $$x$$:</strong>
              <br />Take the square root:
              $$x + 2 = \\pm 1,$$ 
              so 
              $$x = -2 \\pm 1,$$ resulting in 
              $$x = -1$$ or $$x = -3.$$ 
            </li>
          </ol>
        </div>
        <hr />
        <div class="example">
          <h3>Example 4: Converting to Vertex Form for Graphing</h3>
          <p>Rewrite the quadratic function $$y = 2x^2 - 8x - 5$$ in vertex form by completing the square, and determine the vertex and intercepts.</p>
          <ol>
            <li>
              <strong>Factor out the coefficient of $$x^2$$:</strong>
              <br />Since the coefficient is 2, factor it from the $$x$$-terms:
              $$y = 2(x^2 - 4x) - 5.$$ 
            </li>
            <li>
              <strong>Find half the coefficient of $$x$$:</strong>
              <br />Inside the parentheses, half of -4 is -2, so let $$d = -2$$ and compute 
              $$d^2 = 4.$$ 
            </li>
            <li>
              <strong>Add and subtract the square:</strong>
              <br />Rewrite as:
              $$y = 2(x^2 - 4x + 4 - 4) - 5.$$ 
            </li>
            <li>
              <strong>Rewrite as a perfect square:</strong>
              <br />Express the quadratic inside as a perfect square:
              $$y = 2[(x - 2)^2 - 4] - 5.$$ 
            </li>
            <li>
              <strong>Simplify the expression:</strong>
              <br />Distribute and combine constants:
              $$y = 2(x - 2)^2 - 8 - 5 = 2(x - 2)^2 - 13.$$ 
            </li>
            <li>
              <strong>Determine the vertex:</strong>
              <br />The vertex form is $$y = 2(x - 2)^2 - 13,$$ so the vertex is 
              $$(2, -13).$$ 
            </li>
            <li>
              <strong>Find the intercepts:</strong>
              <br /><em>y-intercept:</em> Substitute $$x = 0$$ into the original equation:
              $$y = 2(0)^2 - 8(0) - 5 = -5.$$ 
              <br /><em>x-intercepts:</em> Set $$y = 0$$ in the vertex form:
              $$0 = 2(x - 2)^2 - 13 \\Rightarrow 2(x - 2)^2 = 13 \\Rightarrow (x - 2)^2 = \\frac{13}{2}.$$ 
              <br />Thus, 
              $$x = 2 \\pm \\sqrt{\\frac{13}{2}}.$$ 
            </li>
          </ol>
        </div>
        <hr />
        <div class="example">
          <h3>Example 5: Finding the Turning Point</h3>
          <p>Determine the coordinates of the turning point of the quadratic function 
          $$y = 9 + 18x - 3x^2$$ by completing the square.</p>
          <ol>
            <li>
              <strong>Rewrite in standard form:</strong>
              <br />Reorder the function as 
              $$y = -3x^2 + 18x + 9.$$ 
            </li>
            <li>
              <strong>Factor out the coefficient of $$x^2$$:</strong>
              <br />Factor -3 from the terms involving $$x$$:
              $$y = -3(x^2 - 6x) + 9.$$ 
            </li>
            <li>
              <strong>Find half the coefficient of $$x$$:</strong>
              <br />Inside the parentheses, half of -6 is -3, so let $$d = -3$$ and compute 
              $$d^2 = 9.$$ 
            </li>
            <li>
              <strong>Add and subtract the square:</strong>
              <br />Rewrite as:
              $$y = -3(x^2 - 6x + 9 - 9) + 9.$$ 
            </li>
            <li>
              <strong>Rewrite as a perfect square:</strong>
              <br />Express the trinomial as a perfect square:
              $$y = -3[(x - 3)^2 - 9] + 9.$$ 
            </li>
            <li>
              <strong>Simplify to vertex form:</strong>
              <br />Distribute -3 and combine constants:
              $$y = -3(x - 3)^2 + 27 + 9 = -3(x - 3)^2 + 36.$$ 
            </li>
            <li>
              <strong>Identify the turning point:</strong>
              <br />The vertex (turning point) is 
              $$(3, 36).$$ 
            </li>
          </ol>
        </div>
        <p><strong>Additional Tips:</strong></p>
        <ul>
          <li>Always keep the equation balanced when adding and subtracting $$d^2$$.</li>
          <li>This method is versatile: use it for solving equations or converting quadratic functions to vertex form for graphing.</li>
          <li>Double-check your work by expanding the perfect square to ensure it matches the original expression.</li>
        </ul>
      ${modelAnswers}
      </div>
    `,
  },
  inequalities: {
    title: "Graphical Inequalities",
    content: `
      <div class="lesson">
        <h2>Graphical Inequalities</h2>
        <p>
          <strong>Definition:</strong> Graphical inequalities indicate which regions of a coordinate plane satisfy a given inequality. The boundary is drawn as a line—dashed for strict inequalities (&lt; or &gt;) and solid for inclusive inequalities (≤ or ≥)—and then the appropriate region is shaded.
        </p>
        <p><strong>Step-by-Step Method:</strong></p>
        <ol>
          <li><em>Write the inequality:</em> If needed, rearrange it into the form $$y > mx + c$$, $$y \\geq mx + c$$, etc.</li>
          <li><em>Draw the boundary:</em> Plot the line $$y = mx + c.$$ Use a dashed line if the inequality is strict and a solid line if it is inclusive.</li>
          <li><em>Choose a test point:</em> Select a point not on the line (often $$(0,0)$$, if applicable) and substitute it into the inequality.</li>
          <li><em>Shade the region:</em> If the test point satisfies the inequality, shade that region; otherwise, shade the opposite side.</li>
        </ol>
        
        <div class="button-container">
          <button onclick="showExample(1)" class="btn btn-primary">Example 1: y > 2x + 1</button>
          <button onclick="showExample(2)" class="btn btn-primary">Example 2: y ≤ -x + 4</button>
          <button onclick="showExample(3)" class="btn btn-primary">Example 3: 1 < x + 2 ≤ 5</button>
          <button onclick="showExample(4)" class="btn btn-primary">Example 4: System of Inequalities</button>
          <button onclick="showExample(5)" class="btn btn-primary">Example 5: Quadratic Inequality</button>
        </div>
        
        <!-- Example 1 -->
        <div id="example1" class="example-section">
          <h3>Example 1: y > 2x + 1</h3>
          <div id="graph1" class="graph-container"></div>
          <div class="steps">
            <ol>
              <li>
                <strong>Draw the boundary:</strong>
                <br />Plot the line <span class="formula">y = 2x + 1</span> using a <span class="key-point">dashed line</span> because the inequality is strict (>) .
              </li>
              <li>
                <strong>Test a point:</strong>
                <br />Choose (0,0) and substitute: <span class="formula">0 > 2(0) + 1</span> becomes <span class="formula">0 > 1</span>, which is <span class="key-point">false</span>.
              </li>
              <li>
                <strong>Shade the region:</strong>
                <br />Since the test point does not satisfy the inequality, shade the region that does not include (0,0). This is the area above the line.
              </li>
            </ol>
          </div>
        </div>
        
        <!-- Example 2 -->
        <div id="example2" class="example-section" style="display: none;">
          <h3>Example 2: y ≤ -x + 4</h3>
          <div id="graph2" class="graph-container"></div>
          <div class="steps">
            <ol>
              <li>
                <strong>Draw the boundary:</strong>
                <br />Plot the line <span class="formula">y = -x + 4</span> using a <span class="key-point">solid line</span> because the inequality is inclusive (≤).
              </li>
              <li>
                <strong>Test a point:</strong>
                <br />Choose (0,0) and substitute: <span class="formula">0 ≤ -0 + 4</span> simplifies to <span class="formula">0 ≤ 4</span>, which is <span class="key-point">true</span>.
              </li>
              <li>
                <strong>Shade the region:</strong>
                <br />Since (0,0) satisfies the inequality, shade the region that includes (0,0). This is the area below (or including) the line.
              </li>
            </ol>
          </div>
        </div>
        
        <!-- Example 3 -->
        <div id="example3" class="example-section" style="display: none;">
          <h3>Example 3: Compound Inequality 1 < x + 2 ≤ 5</h3>
          <div id="graph3" class="graph-container"></div>
          <div class="steps">
            <ol>
              <li>
                <strong>Simplify the inequality:</strong>
                <br />Subtract 2 from all parts to get: <span class="formula">-1 < x ≤ 3</span>.
              </li>
              <li>
                <strong>Interpret the inequality:</strong>
                <br />This represents all values of x between -1 and 3, with -1 excluded (open circle) and 3 included (closed circle).
              </li>
              <li>
                <strong>Graph on a number line:</strong>
                <br />Mark an open circle at x = -1 and a closed circle at x = 3.
              </li>
              <li>
                <strong>Shade the region:</strong>
                <br />Shade the vertical band (if extended to a coordinate plane) between x = -1 and x = 3.
              </li>
            </ol>
          </div>
        </div>
        
        <!-- Example 4 -->
        <div id="example4" class="example-section" style="display: none;">
          <h3>Example 4: System of Linear Inequalities</h3>
          <p>Solve and graph the system of inequalities:</p>
          <ul>
            <li><span class="formula">y ≥ x + 1</span></li>
            <li><span class="formula">y &lt; -2x + 6</span></li>
          </ul>
          <div id="graph4" class="graph-container"></div>
          <div class="steps">
            <ol>
              <li>
                <strong>Graph the first inequality:</strong>
                <br />Plot <span class="formula">y = x + 1</span> with a <span class="key-point">solid line</span> (since the inequality is ≥). Test (0,0): <span class="formula">0 ≥ 0 + 1</span> is false, so shade the side that does not include (0,0).
              </li>
              <li>
                <strong>Graph the second inequality:</strong>
                <br />Plot <span class="formula">y = -2x + 6</span> with a <span class="key-point">dashed line</span> (since the inequality is strict, <). Test (0,0): <span class="formula">0 &lt; 6</span> is true, so shade the side that includes (0,0).
              </li>
              <li>
                <strong>Determine the solution region:</strong>
                <br />The overall solution is the intersection of the two shaded regions, where both conditions are satisfied.
              </li>
            </ol>
          </div>
        </div>
        
        <!-- Example 5 -->
        <div id="example5" class="example-section" style="display: none;">
          <h3>Example 5: Quadratic Inequality</h3>
          <p>Graph the quadratic inequality:</p>
          <ul>
            <li><span class="formula">y ≤ x<sup>2</sup> - 4</span></li>
          </ul>
          <div id="graph5" class="graph-container"></div>
          <div class="steps">
            <ol>
              <li>
                <strong>Identify the boundary:</strong>
                <br />The boundary is the parabola <span class="formula">y = x<sup>2</sup> - 4</span>. Since the inequality is ≤, the parabola is drawn with a <span class="key-point">solid curve</span>.
              </li>
              <li>
                <strong>Plot the parabola:</strong>
                <br />Sketch the curve by plotting key points (for example, at x = 0, y = -4; at x = 2, y = 0; at x = -2, y = 0).
              </li>
              <li>
                <strong>Test a point:</strong>
                <br />Choose a point not on the parabola, such as (0,0). Substitute into the inequality: <span class="formula">0 ≤ 0<sup>2</sup> - 4</span> gives <span class="formula">0 ≤ -4</span>, which is <span class="key-point">false</span>.
              </li>
              <li>
                <strong>Shade the region:</strong>
                <br />Since the test point fails the inequality, shade the region that does not include (0,0); in this case, shade the area <em>below</em> the parabola, which represents the set of points where $$y$$ is less than or equal to $$x^2 - 4$$.
              </li>
            </ol>
          </div>
        </div>
        
        <p><strong>Additional Tips:</strong></p>
        <ul>
          <li>Always double-check your test points to ensure you shade the correct region.</li>
          <li>For compound inequalities, it is helpful to solve the inequality algebraically first and then graph the resulting boundary on a number line or coordinate plane.</li>
          <li>When working with systems of inequalities, the solution is the intersection of the individual solution regions.</li>
        </ul>
      </div>
    `,
  },
  simultaneousEquations: {
    title: "Simultaneous Equations",
    content: `
      <div class="lesson">
        <h2>Simultaneous Equations</h2>
        <p>
          <strong>Definition:</strong> Simultaneous equations consist of two or more equations with two or more variables. The solution is found by determining the values of the variables that satisfy all the equations simultaneously.
        </p>
        <p><strong>Step-by-Step Method:</strong></p>
        <ol>
          <li><em>Write down the equations:</em> Clearly state each equation.</li>
          <li><em>Choose a method:</em> Use either substitution (solve one equation for a variable and substitute into the other) or elimination (add or subtract equations to eliminate one variable).</li>
          <li><em>Solve for one variable:</em> Find the value of one variable.</li>
          <li><em>Substitute back:</em> Use the found value to solve for the remaining variable(s).</li>
          <li><em>Verify:</em> Check the solution in each original equation.</li>
        </ol>
        <div class="example">
          <h3>Example 1</h3>
          <p>Solve the equations:</p>
          <p>$$y = 2x + 3$$</p>
          <p>$$y = -x + 1$$</p>
          <ol>
            <li>Set $$2x + 3 = -x + 1.$$</li>
            <li>Solve: $$3x = -2 \\quad \\Rightarrow \\quad x = -\\frac{2}{3}.$$</li>
            <li>Substitute into $$y = 2x + 3$$: 
              $$y = 2\\left(-\\frac{2}{3}\\right) + 3 = -\\frac{4}{3} + 3 = \\frac{5}{3}.$$</li>
            <li>The solution is $$x = -\\frac{2}{3}, \\; y = \\frac{5}{3}.$$</li>
          </ol>
        </div>
        <div class="example">
          <h3>Example 2</h3>
          <p>Solve the equations:</p>
          <p>$$2x + 3y = 12$$</p>
          <p>$$x - y = 2$$</p>
          <ol>
            <li>Solve $$x - y = 2$$ for $$x$$: $$x = y + 2.$$</li>
            <li>Substitute into $$2x + 3y = 12$$: 
              $$2(y + 2) + 3y = 12.$$</li>
            <li>Simplify: $$2y + 4 + 3y = 12 \\quad \\Rightarrow \\quad 5y = 8.$$</li>
            <li>Thus, $$y = \\frac{8}{5}.$$</li>
            <li>Substitute back: $$x = \\frac{8}{5} + 2 = \\frac{18}{5}.$$</li>
            <li>The solution is $$x = \\frac{18}{5}, \\; y = \\frac{8}{5}.$$</li>
          </ol>
        </div>
        <div class="example">
          <h3>Example 3 (Non-linear System)</h3>
          <p>Solve the equations:</p>
          <p>$$x^2 + y^2 = 25$$</p>
          <p>$$y - x = 5$$</p>
          <ol>
            <li>Solve the second equation for $$y$$: $$y = x + 5.$$</li>
            <li>Substitute into the first equation: 
              $$x^2 + (x+5)^2 = 25.$$</li>
            <li>Simplify: $$x^2 + x^2 + 10x + 25 = 25 \\quad \\Rightarrow \\quad 2x^2 + 10x = 0.$$</li>
            <li>Factor: $$2x(x + 5) = 0.$$</li>
            <li>Thus, $$x = 0$$ or $$x = -5.$$</li>
            <li>If $$x = 0$$, then $$y = 0 + 5 = 5.$$ If $$x = -5$$, then $$y = -5 + 5 = 0.$$</li>
            <li>The solutions are $$ (0, 5) $$ and $$ (-5, 0).$$</li>
          </ol>
        </div>
        <p>
          <em>For further practice:</em>
          <a href="https://www.tes.com/teaching-resource/simultaneous-equations-worksheet" target="_blank">
            Simultaneous Equations Worksheet
          </a>
        </p>
      </div>
    `,
  },
  proportion: {
    title: "Direct & Inverse Proportion",
    content: `
        <div class="lesson">
          <h2>Direct Proportion</h2>
          <p>
            <strong>What it is:</strong> Two quantities are directly proportional if they increase or decrease together at the same rate. Their relationship is written as <strong>y = kx</strong>, where k is the constant of proportionality.
          </p>
          <p><strong>Step-by-Step Method:</strong></p>
          <ol>
            <li><em>Determine k:</em> Find the constant by dividing y by x from a set of values.</li>
            <li><em>Use the formula:</em> Multiply any given x by k to find y.</li>
          </ol>
          <div class="example">
            <h3>Example</h3>
            <p>If y = 3x, then for x = 4:</p>
            <ol>
              <li>k is 3 (since y/x = 3).</li>
              <li>Calculate: y = 3 × 4 = 12.</li>
            </ol>
          </div>
          <p>
            <em>Practice with:</em>
            <a href="https://www.mathsgenie.co.uk/worksheets/direct-proportion" target="_blank">Direct Proportion Worksheet</a>
          </p>
        </div>
        <div class="lesson">
          <h2>Inverse Proportion</h2>
          <p>
            <strong>What it is:</strong> Two quantities are inversely proportional if one increases while the other decreases so that their product remains constant. This relationship is written as <strong>y = k/x</strong>.
          </p>
          <p><strong>Step-by-Step Method:</strong></p>
          <ol>
            <li><em>Determine k:</em> Multiply a pair of corresponding values of x and y to find the constant.</li>
            <li><em>Use the formula:</em> For any new value of x, calculate y by y = k/x.</li>
          </ol>
          <div class="example">
            <h3>Example</h3>
            <p>If y = 10/x, then for x = 2:</p>
            <ol>
              <li>Here, k = 10.</li>
              <li>Calculate: y = 10 / 2 = 5.</li>
            </ol>
          </div>
          <p>
            <em>Extra practice:</em>
            <a href="https://www.tes.com/teaching-resource/inverse-proportion-worksheet" target="_blank">Inverse Proportion Worksheet</a>
          </p>
        </div>
      `,
  },
  functions: {
    title: "Functions & Graphs",
    content: `
        <div class="lesson">
          <h2>Functions</h2>
          <p>
            A <strong>function</strong> is a rule that assigns each input exactly one output. It is usually written as f(x), meaning the output is determined by the input value x.
          </p>
          <p><strong>Step-by-Step Method:</strong></p>
          <ol>
            <li><em>Identify the rule:</em> Understand the relationship defined by the function.</li>
            <li><em>Substitute:</em> Replace x with a given value to compute f(x).</li>
            <li><em>Simplify:</em> Carry out the arithmetic to obtain the result.</li>
          </ol>
          <div class="example">
            <h3>Example</h3>
            <p>If f(x) = 2x + 3, then to find f(4):</p>
            <ol>
              <li>Substitute: f(4) = 2(4) + 3</li>
              <li>Simplify: f(4) = 8 + 3 = 11</li>
            </ol>
          </div>
          <p>
            <em>For more practice:</em>
            <a href="https://www.savemyexams.com/igcse/maths/functions-worksheet" target="_blank">Functions Worksheet</a>
          </p>
        </div>
        <div class="lesson">
          <h2>Graphing Functions</h2>
          <p>
            Graphing a function involves plotting the points (x, f(x)) on a coordinate plane and then connecting them to show the function’s trend.
          </p>
          <p><strong>Step-by-Step Method:</strong></p>
          <ol>
            <li><em>Choose x-values:</em> Pick several values for x.</li>
            <li><em>Calculate f(x):</em> Compute the corresponding output for each x-value.</li>
            <li><em>Plot points:</em> Place the (x, f(x)) points on the graph.</li>
            <li><em>Draw the graph:</em> Connect the points smoothly (or use a straight line if the function is linear).</li>
          </ol>
          <div class="example">
            <h3>Example</h3>
            <p>For f(x) = 2x + 3, compute for x = -1, 0, 1, etc., and then plot these points to draw a straight line.</p>
          </div>
          <p>
            <em>Practice graphing:</em>
            <a href="https://www.mathsgenie.co.uk/worksheets/graphing-functions" target="_blank">Graphing Functions Worksheet</a>
          </p>
        </div>
      `,
  },
  transformations: {
    title: "Graph Transformations",
    content: `
        <div class="lesson">
          <h2>Graph Transformations</h2>
          <p>
            Graph transformations involve changing the position or shape of a graph. They include:
          </p>
          <ul>
            <li><strong>Translations:</strong> Shifting the graph horizontally or vertically. (For example, replacing x with (x – h) moves the graph h units to the right.)</li>
            <li><strong>Reflections:</strong> Flipping the graph over an axis by multiplying x or f(x) by -1.</li>
            <li><strong>Stretches/Compressions:</strong> Changing the width or height of the graph by multiplying x or f(x) by a constant factor.</li>
          </ul>
          <p><strong>Step-by-Step Example:</strong></p>
          <ol>
            <li>Start with f(x) = x².</li>
            <li>For a horizontal shift to the right by 3 units, use f(x-3) = (x-3)².</li>
            <li>For a vertical stretch by a factor of 2, use 2f(x) = 2x².</li>
          </ol>
          <div class="example">
            <h3>Example</h3>
            <p>Replacing x with (x – 3) in f(x) shifts the graph to the right by 3 units.</p>
          </div>
          <p>
            <em>Additional practice:</em>
            <a href="https://www.tes.com/teaching-resource/graph-transformations-worksheet" target="_blank">Graph Transformations Worksheet</a>
          </p>
        </div>
      `,
  },
  differentiation: {
    title: "Differentiation",
    content: `
        <div class="lesson">
          <h2>Differentiation</h2>
          <p>
            <strong>What it is:</strong> Differentiation is the process of finding a derivative, which represents the rate at which a function is changing at any given point.
          </p>
          <p><strong>Step-by-Step Method:</strong></p>
          <ol>
            <li><em>Identify the function:</em> Write down the function f(x) that you need to differentiate.</li>
            <li><em>Apply the power rule:</em> For any term xⁿ, the derivative is n×x^(n-1).</li>
            <li><em>Differentiate term-by-term:</em> Find the derivative of each term in the function.</li>
            <li><em>Simplify:</em> Combine like terms to get the final derivative, f'(x).</li>
          </ol>
          <div class="example">
            <h3>Example</h3>
            <p>For f(x) = x²:</p>
            <ol>
              <li>Apply the power rule: The derivative of x² is 2x.</li>
              <li>Thus, f'(x) = 2x.</li>
            </ol>
          </div>
          <p>
            <em>Practice differentiation:</em>
            <a href="https://www.mathsgenie.co.uk/worksheets/differentiation" target="_blank">Differentiation Worksheet</a>
          </p>
        </div>
      `,
  },
  circle: {
    title: "Circle Geometry",
    content: `
        <div class="lesson">
          <h2>Circle Geometry</h2>
          <p>
            Circles have unique properties that are fundamental in geometry. Two main formulas used are:
          </p>
          <ul>
            <li><strong>Circumference:</strong> C = 2πr, which calculates the distance around the circle.</li>
            <li><strong>Area:</strong> A = πr², which calculates the space inside the circle.</li>
          </ul>
          <p><strong>Step-by-Step Example:</strong></p>
          <ol>
            <li><em>Determine the radius:</em> Find the value of r.</li>
            <li><em>Calculate the circumference:</em> Multiply 2π by r.</li>
            <li><em>Calculate the area:</em> Square the radius and multiply by π.</li>
          </ol>
          <div class="example">
            <h3>Example</h3>
            <p>For a circle with a radius of 5:</p>
            <ol>
              <li>Circumference: C = 2π×5 ≈ 31.42</li>
              <li>Area: A = π×5² = 25π ≈ 78.54</li>
            </ol>
          </div>
          <p>
            <em>Further revision:</em>
            <a href="https://www.savemyexams.com/igcse/maths/circle-geometry-worksheet" target="_blank">Circle Geometry Worksheet</a>
          </p>
        </div>
      `,
  },
  constructions: {
    title: "Geometric Constructions",
    content: `
        <div class="lesson">
          <h2>Constructions</h2>
          <p>
            Geometric constructions are techniques used to create precise shapes using only a compass and straightedge. A common task is to construct a perpendicular bisector.
          </p>
          <p><strong>Step-by-Step Method:</strong></p>
          <ol>
            <li><em>Draw the line segment:</em> Begin with the given line segment AB.</li>
            <li><em>Set the compass:</em> Place the compass point on A, adjust it to more than half the length of AB, and draw an arc above and below the line.</li>
            <li><em>Repeat from B:</em> Without changing the compass width, repeat the process from point B, creating two intersecting arcs with the first set.</li>
            <li><em>Mark intersections:</em> Label the intersection points of the arcs.</li>
            <li><em>Draw the bisector:</em> Use a straightedge to draw a line through the intersection points. This line is the perpendicular bisector of AB.</li>
          </ol>
          <div class="example">
            <h3>Example</h3>
            <p>Follow the above steps to construct the perpendicular bisector of a line segment.</p>
          </div>
          <p>
            <em>Practice constructions:</em>
            <a href="https://www.mathsgenie.co.uk/worksheets/constructions" target="_blank">Constructions Worksheet</a>
          </p>
        </div>
      `,
  },
};

// Quiz bank: 20 questions per topic
const quizzes = {
  compound: [
    {
      question:
        "1. What is the final amount when £1000 is compounded annually at 5% for 3 years?",
      answer: 1157.63,
      check: (ans) => Math.abs(parseFloat(ans) - 1157.63) < 1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Identify the values:</em><br>
              $$P = £1000,\\; r = 5\\% = 0.05,\\; n = 1,\\; t = 3.$$
            </li>
            <li><em>Plug into the formula:</em><br>
              $$A = P \\times \\Bigl(1 + \\frac{r}{n}\\Bigr)^{n \\times t} = 1000 \\times (1.05)^3.$$
            </li>
            <li><em>Calculate:</em><br>
              $$(1.05)^3 \\approx 1.15763 \\quad\\Rightarrow\\quad A \\approx 1000 \\times 1.15763 = £1157.63.$$
            </li>
            <li><em>Conclusion:</em><br>
              The final amount after 3 years is approximately £1157.63.
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "2. Calculate compound interest: £500 at 4% compounded semi-annually for 2 years. (Round to two decimals)",
      answer: 541.22,
      check: (ans) => Math.abs(parseFloat(ans) - 541.22) < 1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Identify the values:</em><br>
              $$P = £500,\\; r = 4\\% = 0.04,\\; n = 2 \\text{ (semi-annually)},\\; t = 2.$$
            </li>
            <li><em>Plug into the formula:</em><br>
              $$A = 500 \\times \\Bigl(1 + \\frac{0.04}{2}\\Bigr)^{2 \\times 2} = 500 \\times (1.02)^4.$$
            </li>
            <li><em>Calculate:</em><br>
              $$(1.02)^4 \\approx 1.08243 \\quad\\Rightarrow\\quad A \\approx 500 \\times 1.08243 = £541.22.$$
            </li>
            <li><em>Conclusion:</em><br>
              The compound interest added is £541.22 – £500 = £41.22, so the final amount is £541.22.
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "3. An asset worth £8000 depreciates linearly to £2000 over 6 years. What is the annual depreciation?",
      answer: 1000,
      check: (ans) => Math.abs(parseFloat(ans) - 1000) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Determine total loss in value:</em><br>
              $$£8000 - £2000 = £6000.$$
            </li>
            <li><em>Spread over 6 years:</em><br>
              $$\\frac{£6000}{6} = £1000 \\text{ per year}.$$
            </li>
            <li><em>Conclusion:</em><br>
              The asset depreciates by £1000 each year.
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "4. A product sells for £150 with a cost of £100. What is the profit per item?",
      answer: 50,
      check: (ans) => Math.abs(parseFloat(ans) - 50) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Profit formula:</em><br>
              $$\\text{Profit} = \\text{Selling Price} - \\text{Cost}.$$
            </li>
            <li><em>Substitute the values:</em><br>
              $$£150 - £100 = £50.$$
            </li>
            <li><em>Conclusion:</em><br>
              The profit per item is £50.
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "5. A product marked up by 25% on a cost of £80: What is the selling price?",
      answer: 100,
      check: (ans) => Math.abs(parseFloat(ans) - 100) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Understand markup:</em><br>
              A 25\\% markup means the selling price is $$\\text{Cost} \\times (1 + 0.25).$$
            </li>
            <li><em>Calculate:</em><br>
              $$£80 \\times 1.25 = £100.$$
            </li>
            <li><em>Conclusion:</em><br>
              The selling price is £100.
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "6. What is the compound interest earned on £2000 at 3% compounded monthly for 1 year? (Round to two decimals)",
      answer: 60.84,
      check: (ans) => Math.abs(parseFloat(ans) - 60.84) < 1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Identify the values:</em><br>
              $$P = £2000,\\; r = 3\\% = 0.03,\\; n = 12,\\; t = 1.$$
            </li>
            <li><em>Compute final amount:</em><br>
              $$A = 2000 \\times \\Bigl(1 + \\frac{0.03}{12}\\Bigr)^{12}.$$
              <br>
              Approx:
              $$A \\approx 2000 \\times 1.03042 = £2060.84.$$
            </li>
            <li><em>Interest earned:</em><br>
              $$\\text{Interest} = A - P = 2060.84 - 2000 = £60.84.$$
            </li>
            <li><em>Conclusion:</em><br>
              The compound interest earned is £60.84.
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "7. An asset depreciates 15% per year on its current value. What is its value after 2 years if starting at £10000?",
      answer: 7225,
      check: (ans) => Math.abs(parseFloat(ans) - 7225) < 1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Reducing balance depreciation:</em><br>
              $$\\text{Value after } n \\text{ years} = \\text{Initial Value} \\times (1 - r)^n.$$
            </li>
            <li><em>Substitute values:</em><br>
              Here, $$r = 15\\% = 0.15,\\; n = 2.$$
              <br>
              $$\\text{Value} = 10000 \\times (0.85)^2.$$
            </li>
            <li><em>Calculate:</em><br>
              $$(0.85)^2 = 0.7225,\\; \\text{Value} = 10000 \\times 0.7225 = £7225.$$
            </li>
            <li><em>Conclusion:</em><br>
              The asset’s value after 2 years is £7225.
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "8. A company's revenue is £5000 and total costs are £4500. What is the profit?",
      answer: 500,
      check: (ans) => Math.abs(parseFloat(ans) - 500) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Profit formula:</em><br>
              $$\\text{Profit} = \\text{Revenue} - \\text{Cost}.$$
            </li>
            <li><em>Substitute the values:</em><br>
              $$5000 - 4500 = 500.$$
            </li>
            <li><em>Conclusion:</em><br>
              The profit is £500.
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "9. If the profit margin is 20% on sales of £250, what is the profit?",
      answer: 50,
      check: (ans) => Math.abs(parseFloat(ans) - 50) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Identify the margin:</em><br>
              A 20\\% profit margin on £250 means profit is $$0.20 \\times £250.$$
            </li>
            <li><em>Calculate:</em><br>
              $$0.20 \\times 250 = £50.$$
            </li>
            <li><em>Conclusion:</em><br>
              The profit is £50.
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "10. If compound interest is applied annually, how many times is interest added in 5 years?",
      answer: 5,
      check: (ans) => Math.abs(parseFloat(ans) - 5) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li>Annual compounding means interest is added once per year.</li>
            <li>Over 5 years, interest is added 5 times.</li>
            <li><em>Conclusion:</em> 5 compounding periods in 5 years.</li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "11. For an investment with a 6% annual interest rate compounded annually, what is the interest rate per compounding period? (in %)",
      answer: 6,
      check: (ans) => Math.abs(parseFloat(ans) - 6) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li>With annual compounding, there is only 1 period per year.</li>
            <li>Hence, the rate per period is the same as the annual rate: 6\\%.</li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "12. Calculate compound interest for £1500 at 8% compounded quarterly for 2 years. (Round to two decimals)",
      answer: 1757.49,
      check: (ans) => Math.abs(parseFloat(ans) - 1757.49) < 1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Identify the values:</em><br>
              $$P = £1500,\\; r = 8\\% = 0.08,\\; n = 4,\\; t = 2.$$
            </li>
            <li><em>Plug into the formula:</em><br>
              $$A = 1500 \\times \\Bigl(1 + \\frac{0.08}{4}\\Bigr)^{4 \\times 2} = 1500 \\times (1.02)^8.$$
            </li>
            <li><em>Calculate:</em><br>
              $$(1.02)^8 \\approx 1.17166 \\quad\\Rightarrow\\quad A \\approx 1500 \\times 1.17166 = £1757.49.$$
            </li>
            <li><em>Conclusion:</em><br>
              The final amount is approximately £1757.49.
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "13. If an asset depreciates by £500 per year and has a salvage value of £1000 after 5 years, what was its initial value?",
      answer: 3500,
      check: (ans) => Math.abs(parseFloat(ans) - 3500) < 1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Total depreciation over 5 years:</em><br>
              $$£500 \\times 5 = £2500.$$
            </li>
            <li><em>Initial value:</em><br>
              $$\\text{Initial Value} = \\text{Salvage Value} + \\text{Total Depreciation} = £1000 + £2500 = £3500.$$
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "14. A company increases its profit by 10% each year. If current profit is £1000, what is next year's profit?",
      answer: 1100,
      check: (ans) => Math.abs(parseFloat(ans) - 1100) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li>Next year's profit = current profit $$\\times (1 + 0.10).$$</li>
            <li>Hence, $$£1000 \\times 1.10 = £1100.$$</li>
            <li><em>Conclusion:</em> Next year's profit is £1100.</li>
          </ol>
        </div>
      `,
    },
    {
      question: "15. What is the formula for compound interest?",
      answer: "a = p(1 + r/n)^(n*t)",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("p(1+r"),
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <p>
            The general compound interest formula is:
          </p>
          <p>
            $$A = P \\times \\Bigl(1 + \\frac{r}{n}\\Bigr)^{n \\times t}.$$
          </p>
          <p>
            Where:
            <ul>
              <li><strong>P</strong>: Principal</li>
              <li><strong>r</strong>: Annual interest rate (decimal form)</li>
              <li><strong>n</strong>: Number of compounding periods per year</li>
              <li><strong>t</strong>: Time in years</li>
            </ul>
          </p>
        </div>
      `,
    },
    {
      question: "16. Define the straight-line depreciation formula.",
      answer: "depreciation = (initial value - salvage value) / useful life",
      check: (ans) =>
        ans
          .replace(/\s+/g, "")
          .toLowerCase()
          .includes("initialvalue-salvagevalue"),
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <p>
            The straight-line method spreads the asset's cost evenly across its useful life:
          </p>
          <p>
            $$\\text{Depreciation per year} = \\frac{\\text{Initial Value} - \\text{Salvage Value}}{\\text{Useful Life}}.$$
          </p>
        </div>
      `,
    },
    {
      question: "17. Define the profit formula.",
      answer: "profit = revenue - cost",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase().includes("revenue-cost"),
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <p>
            Profit is calculated by subtracting all costs from the total revenue:
          </p>
          <p>
            $$\\text{Profit} = \\text{Revenue} - \\text{Cost}.$$
          </p>
        </div>
      `,
    },
    {
      question:
        "18. If an investment of £1200 grows to £1440 in one year, what is the interest rate (in %)?",
      answer: 20,
      check: (ans) => Math.abs(parseFloat(ans) - 20) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Interest earned:</em><br>
              $$£1440 - £1200 = £240.$$
            </li>
            <li><em>Calculate rate:</em><br>
              $$\\text{Rate} = \\frac{240}{1200} = 0.20 = 20\\%.$$
            </li>
            <li><em>Conclusion:</em> The annual interest rate is 20\\%.</li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "19. A car costing £20,000 depreciates to £12,000 over 4 years using straight-line depreciation. What is the annual depreciation?",
      answer: 2000,
      check: (ans) => Math.abs(parseFloat(ans) - 2000) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Total depreciation:</em><br>
              $$£20000 - £12000 = £8000.$$
            </li>
            <li><em>Over 4 years:</em><br>
              $$\\frac{£8000}{4} = £2000 \\text{ per year}.$$
            </li>
            <li><em>Conclusion:</em><br>
              The car depreciates by £2000 each year.
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "20. A business sells 50 units at a profit of £30 per unit. What is the total profit?",
      answer: 1500,
      check: (ans) => Math.abs(parseFloat(ans) - 1500) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Profit per unit:</em> £30</li>
            <li><em>Total units sold:</em> 50</li>
            <li><em>Total profit:</em><br>
              $$50 \\times 30 = £1500.$$
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "21. Bank A offers 2.5% compound interest annually. Bank B offers 2.4% compound interest monthly. Which bank offers the better rate over 3 years for £5000?",
      answer: "Bank B",
      check: (ans) => ans.toLowerCase().includes("b"),
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Annual vs. monthly compounding:</em><br>
              Bank A: 2.5\\% once per year.<br>
              Bank B: 2.4\\%/12 per month, compounded 12 times.
            </li>
            <li><em>Effective Annual Rate (EAR) for Bank B:</em><br>
              $$\\bigl(1 + \\frac{0.024}{12}\\bigr)^{12} - 1 \\approx 2.43\\% \\text{ (slightly above 2.4\\% nominal)}.$$
            </li>
            <li><em>Over 3 years:</em> Bank B’s monthly compounding accumulates slightly more than Bank A’s 2.5\\% annual.</li>
            <li><em>Conclusion:</em> Bank B offers a better rate over 3 years.</li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "22. An investment of £6000 grows to £8029.35 after 5 years of compound interest. What is the annual interest rate? (in %)",
      answer: 6,
      check: (ans) => Math.abs(parseFloat(ans) - 6) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Formula:</em> $$A = P \\times (1 + r)^t.$$
              Here, $$8029.35 = 6000 \\times (1 + r)^5.$$
            </li>
            <li><em>Solve for r:</em><br>
              $$ (1 + r)^5 = \\frac{8029.35}{6000} \\approx 1.33823.$$
              $$ 1 + r = (1.33823)^{1/5} \\approx 1.06.$$
            </li>
            <li><em>Conclusion:</em><br>
              $$ r \\approx 0.06 = 6\\%.$$
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "23. A boat initially worth £12500 depreciates by 15% of its current value each year. After how many years will its value first fall below £5000?",
      answer: 7,
      check: (ans) => Math.abs(parseFloat(ans) - 7) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Formula:</em> $$V = 12500 \\times (0.85)^n.$$
            </li>
            <li><em>Threshold:</em> Find the smallest $$n$$ such that $$V < £5000.$$
            </li>
            <li><em>Iterate or solve:</em> Checking year by year, the value drops below £5000 after 7 years.</li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "24. An investment has a variable interest rate: 4.3% for year 1 and 0.9% for years 2 and 3. If £10000 is invested, what is the final amount after 3 years? (Round to two decimals)",
      answer: 10618.59,
      check: (ans) => Math.abs(parseFloat(ans) - 10618.59) < 1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Year 1 growth (4.3%):</em><br>
              $$10000 \\times 1.043 = £10430.$$
            </li>
            <li><em>Year 2 growth (0.9%):</em><br>
              $$10430 \\times 1.009 \\approx £10523.87.$$
            </li>
            <li><em>Year 3 growth (0.9%):</em><br>
              $$10523.87 \\times 1.009 \\approx £10618.59.$$
            </li>
            <li><em>Conclusion:</em><br>
              The final amount is approximately £10618.59.
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "25. Jean invests £12000 in an account for 2 years. In the first year, the interest rate is 2.8%. In the second year, the interest rate is half that of the first year. What is the final amount? (Round to two decimals)",
      answer: 12508.7,
      check: (ans) => Math.abs(parseFloat(ans) - 12508.7) < 1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Year 1 (2.8%):</em><br>
              $$12000 \\times 1.028 = £12336.$$
            </li>
            <li><em>Year 2 (1.4%):</em><br>
              $$12336 \\times 1.014 \\approx £12508.70.$$
            </li>
            <li><em>Conclusion:</em> The final amount is £12508.70.</li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "26. Calculate the continuous compound interest on £5000 at 3% for 4 years. (Round to two decimals)",
      answer: 5636.43,
      check: (ans) => Math.abs(parseFloat(ans) - 5636.43) < 1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Continuous compounding formula:</em><br>
              $$A = P \\times e^{(r \\times t)}.$$
            </li>
            <li><em>Substitute values:</em><br>
              $$A = 5000 \\times e^{(0.03 \\times 4)} = 5000 \\times e^{0.12}.$$
            </li>
            <li><em>Approximate:</em><br>
              $$e^{0.12} \\approx 1.1275,\\; A \\approx 5000 \\times 1.1275 = £5636.43.$$
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "27. If an asset depreciates at a rate of 12% of its current value each year, after how many years will it be worth less than 40% of its original value?",
      answer: 8,
      check: (ans) => Math.abs(parseFloat(ans) - 8) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Formula:</em><br>
              $$\\text{Value} = \\text{Original} \\times (1 - 0.12)^n = \\text{Original} \\times (0.88)^n.$$
            </li>
            <li><em>Threshold:</em><br>
              We want $$(0.88)^n < 0.4.$$
            </li>
            <li><em>Conclusion:</em><br>
              Testing integer values, it first dips below 40\\% of the original value at $$n = 8$$ years.
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "28. £2000 is invested for 3 years with compound interest. The first year has a rate of 2.5%, and the following years have a rate of x%. If the final amount is £2124.46, what is x? (in %)",
      answer: 1.8,
      check: (ans) => Math.abs(parseFloat(ans) - 1.8) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Year 1 (2.5%):</em><br>
              $$2000 \\times 1.025 = £2050.$$
            </li>
            <li><em>Remaining 2 years at x%:</em><br>
              $$2050 \\times \\Bigl(1 + \\frac{x}{100}\\Bigr)^2 = 2124.46.$$
            </li>
            <li><em>Solve for x:</em><br>
              $$\\Bigl(1 + \\frac{x}{100}\\Bigr)^2 = \\frac{2124.46}{2050} \\approx 1.03637,$$
              $$1 + \\frac{x}{100} \\approx \\sqrt{1.03637} \\approx 1.0180,$$
              $$\\frac{x}{100} \\approx 0.0180 \\Rightarrow x \\approx 1.8\\%.$$
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "29. A company pays tax of 40% on its interest earnings. If it invests £5500 at R% for one year and receives £79.20 after tax, what is R? (in %)",
      answer: 3.6,
      check: (ans) => Math.abs(parseFloat(ans) - 3.6) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Tax is 40% of the interest:</em><br>
              After paying 40\\% tax, the net interest is £79.20. So the gross interest must be:
              $$\\frac{79.20}{0.40} = £198.$$
            </li>
            <li><em>Gross interest formula:</em><br>
              $$\\text{Gross Interest} = 5500 \\times \\frac{R}{100} = £198.$$
              Thus,
              $$\\frac{R}{100} = \\frac{198}{5500},\\; R \\approx 3.6\\%.$$
            </li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "30. Two identical investments of £1000 are made. Investment A earns simple interest at 5% annually. Investment B earns compound interest at 4.8% annually. After how many years will Investment B exceed Investment A?",
      answer: 15,
      check: (ans) => Math.abs(parseFloat(ans) - 15) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Investment A (Simple Interest):</em><br>
              $$A_\\text{simple} = 1000 \\times (1 + 0.05n).$$
            </li>
            <li><em>Investment B (Compound Interest):</em><br>
              $$A_\\text{compound} = 1000 \\times (1.048)^n.$$
            </li>
            <li><em>Find n where compound > simple:</em><br>
              Solve $$1000(1.048)^n > 1000(1 + 0.05n).$$
              Iteration or approximation shows $$n = 15$$ is the first integer where B exceeds A.
            </li>
          </ol>
        </div>
      `,
    },
  ],
  quadraticEquation: [
    {
      question:
        "1. Solve 2x² + 4x - 6 = 0 using the quadratic formula. (Enter solutions separated by a comma)",
      answer: [1, -3],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - -3) < 0.1 && Math.abs(parts[1] - 1) < 0.1;
      },
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Identify coefficients:</em> $$a = 2,\\; b = 4,\\; c = -6.$$</li>
            <li><em>Compute the discriminant:</em> $$\\Delta = 4^2 - 4\\times2\\times(-6) = 16 + 48 = 64.$$</li>
            <li><em>Substitute into the formula:</em> $$x = \\frac{-4 \\pm \\sqrt{64}}{4} = \\frac{-4 \\pm 8}{4}.$$</li>
            <li><em>Simplify:</em> Hence, $$x = 1$$ or $$x = -3.$$</li>
          </ol>
        </div>
      `,
    },
    {
      question: "2. Using the quadratic formula, solve x² - 4x - 5 = 0.",
      answer: [5, -1],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - -1) < 0.1 && Math.abs(parts[1] - 5) < 0.1;
      },
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Coefficients:</em> $$a = 1,\\; b = -4,\\; c = -5.$$</li>
            <li><em>Discriminant:</em> $$\\Delta = (-4)^2 - 4\\times1\\times(-5) = 16+20=36.$$</li>
            <li><em>Formula:</em> $$x = \\frac{4 \\pm 6}{2}.$$</li>
            <li><em>Simplify:</em> Thus, $$x = 5$$ or $$x = -1.$$</li>
          </ol>
        </div>
      `,
    },
    {
      question: "3. Solve 3x² + 6x + 2 = 0 using the quadratic formula.",
      answer: "x = -1 ± (√3)/3",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase().includes("-1") &&
        ans.includes("√"),
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Coefficients:</em> $$a = 3,\\; b = 6,\\; c = 2.$$</li>
            <li><em>Discriminant:</em> $$\\Delta = 6^2 - 4\\times3\\times2 = 36 - 24 = 12.$$</li>
            <li><em>Simplify:</em> $$\\sqrt{12} = 2\\sqrt{3}.$$</li>
            <li><em>Formula:</em> $$x = \\frac{-6 \\pm 2\\sqrt{3}}{6} = -1 \\pm \\frac{\\sqrt{3}}{3}.$$</li>
          </ol>
        </div>
      `,
    },
    {
      question: "4. Solve x² - 2x - 8 = 0 using the quadratic formula.",
      answer: [4, -2],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - -2) < 0.1 && Math.abs(parts[1] - 4) < 0.1;
      },
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Coefficients:</em> $$a = 1,\\; b = -2,\\; c = -8.$$</li>
            <li><em>Discriminant:</em> $$\\Delta = (-2)^2 - 4\\times1\\times(-8) = 4+32=36.$$</li>
            <li><em>Formula:</em> $$x = \\frac{2 \\pm 6}{2}.$$</li>
            <li><em>Simplify:</em> Hence, $$x = 4$$ or $$x = -2.$$</li>
          </ol>
        </div>
      `,
    },
    {
      question: "5. Solve 5x² + 3x - 2 = 0 using the quadratic formula.",
      answer: [0.4, -1],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - -1) < 0.1 && Math.abs(parts[1] - 0.4) < 0.1;
      },
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Coefficients:</em> $$a = 5,\\; b = 3,\\; c = -2.$$</li>
            <li><em>Discriminant:</em> $$\\Delta = 3^2 - 4\\times5\\times(-2)=9+40=49.$$</li>
            <li><em>Formula:</em> $$x = \\frac{-3 \\pm 7}{10}.$$</li>
            <li><em>Simplify:</em> Thus, $$x = 0.4$$ or $$x = -1.$$</li>
          </ol>
        </div>
      `,
    },
    {
      question: "6. Solve 4x² - 12x + 9 = 0.",
      answer: "x = 1.5",
      check: (ans) => Math.abs(parseFloat(ans) - 1.5) < 0.1,
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Coefficients:</em> $$a = 4,\\; b = -12,\\; c = 9.$$</li>
            <li><em>Discriminant:</em> $$\\Delta = (-12)^2 - 4\\times4\\times9 = 144-144=0.$$</li>
            <li><em>Since $$\\Delta = 0$$:</em> There is one repeated root:
              $$x = \\frac{12}{8} = 1.5.$$</li>
          </ol>
        </div>
      `,
    },
    {
      question: "7. Solve x² - 5x + 6 = 0 by factoring. Show your work.",
      answer: [2, 3],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - 2) < 0.1 && Math.abs(parts[1] - 3) < 0.1;
      },
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Factor the expression:</em> Find numbers that multiply to 6 and add to -5.</li>
            <li><em>The factors of 6 are:</em> 1 and 6, 2 and 3.</li>
            <li><em>Check sums:</em> 1 + 6 = 7, 2 + 3 = 5.</li>
            <li><em>We need -2 and -3, since:</em> (-2) + (-3) = -5 and (-2)(-3) = 6.</li>
            <li><em>Factored form:</em> $$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$$.</li>
            <li><em>Apply zero product property:</em> Either $$x - 2 = 0$$ or $$x - 3 = 0$$.</li>
            <li><em>Solutions:</em> $$x = 2$$ or $$x = 3$$.</li>
          </ol>
        </div>
      `,
    },
    {
      question: "8. Solve 2x² + 7x + 3 = 0 by factoring.",
      answer: [-0.5, -3],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - -3) < 0.1 && Math.abs(parts[1] - -0.5) < 0.1;
      },
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Need to factor:</em> $$2x^2 + 7x + 3$$</li>
            <li><em>Since $$a = 2$$:</em> Look for factors in form $$(2x + p)(x + q)$$</li>
            <li><em>Need:</em> $$p \\cdot q = 3$$ and $$2q + p = 7$$</li>
            <li><em>Try:</em> $$p = 1$$ and $$q = 3$$</li>
            <li><em>Check:</em> $$2(3) + 1 = 7$$ ✓</li>
            <li><em>Factored form:</em> $$2x^2 + 7x + 3 = (2x + 1)(x + 3) = 0$$</li>
            <li><em>Solve:</em> $$2x + 1 = 0$$ gives $$x = -\\frac{1}{2}$$, and $$x + 3 = 0$$ gives $$x = -3$$</li>
          </ol>
        </div>
      `,
    },
    {
      question: "9. Solve x² + 6x + 8 = 0 by completing the square.",
      answer: [-2, -4],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - -4) < 0.1 && Math.abs(parts[1] - -2) < 0.1;
      },
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Rearrange:</em> $$x^2 + 6x = -8$$</li>
            <li><em>Half coefficient of x:</em> $$\\frac{6}{2} = 3$$</li>
            <li><em>Square this value:</em> $$3^2 = 9$$</li>
            <li><em>Add and subtract this value:</em> $$x^2 + 6x + 9 - 9 = -8$$</li>
            <li><em>Factor perfect square trinomial:</em> $$(x + 3)^2 = 1$$</li>
            <li><em>Take square root of both sides:</em> $$x + 3 = \\pm 1$$</li>
            <li><em>Solve for x:</em> $$x = -3 \\pm 1$$, giving $$x = -2$$ or $$x = -4$$</li>
          </ol>
        </div>
      `,
    },
    {
      question: "10. Solve 2x² - 12x + 10 = 0 by completing the square.",
      answer: [5, 1],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - 1) < 0.1 && Math.abs(parts[1] - 5) < 0.1;
      },
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Divide by 2:</em> $$x^2 - 6x + 5 = 0$$</li>
            <li><em>Rearrange:</em> $$x^2 - 6x = -5$$</li>
            <li><em>Half coefficient of x:</em> $$\\frac{-6}{2} = -3$$</li>
            <li><em>Square this value:</em> $$(-3)^2 = 9$$</li>
            <li><em>Add and subtract this value:</em> $$x^2 - 6x + 9 - 9 = -5$$</li>
            <li><em>Factor perfect square trinomial:</em> $$(x - 3)^2 = 4$$</li>
            <li><em>Take square root of both sides:</em> $$x - 3 = \\pm 2$$</li>
            <li><em>Solve for x:</em> $$x = 3 \\pm 2$$, giving $$x = 5$$ or $$x = 1$$</li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "11. The curve C has equation y = x² + 3x - 3 and the line L has equation y - 5x + 4 = 0. Show algebraically that C and L have exactly one point in common.",
      answer: "The discriminant is 0",
      check: (ans) => {
        let lower = ans.toLowerCase();
        return lower.includes("discriminant") && lower.includes("0");
      },
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li>Write the line in standard form: $$y = 5x - 4.$$</li>
            <li>Substitute into the curve: $$5x - 4 = x^2 + 3x - 3.$$</li>
            <li>Simplify to obtain: $$x^2 - 2x + 1 = 0,$$ which factors as $$(x-1)^2 = 0.$$</li>
            <li>This shows that there is one repeated solution, meaning the discriminant is 0 and the line touches the curve at exactly one point.</li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "12. Convert the quadratic function y = 2x² - 8x - 5 to vertex form by completing the square.",
      answer: "y = 2(x - 2)² - 13",
      check: (ans) => {
        let cleaned = ans.replace(/\s+/g, "").toLowerCase();
        return (
          cleaned.includes("2(x-2)²-13") || cleaned.includes("2(x-2)^2-13")
        );
      },
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Factor out the coefficient of x²:</em> $$y = 2(x^2 - 4x) - 5$$</li>
            <li><em>Half coefficient of x inside parentheses:</em> $$\\frac{-4}{2} = -2$$</li>
            <li><em>Square this value:</em> $$(-2)^2 = 4$$</li>
            <li><em>Add and subtract this value inside parentheses:</em> $$y = 2(x^2 - 4x + 4 - 4) - 5$$</li>
            <li><em>Factor perfect square trinomial:</em> $$y = 2[(x - 2)^2 - 4] - 5$$</li>
            <li><em>Distribute and simplify:</em> $$y = 2(x - 2)^2 - 8 - 5 = 2(x - 2)^2 - 13$$</li>
            <li><em>The vertex form shows that the vertex is at (2, -13)</em></li>
          </ol>
        </div>
      `,
    },
    {
      question: "13. Solve x² + 3x + 2 = 0 by factoring.",
      answer: [-1, -2],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - -2) < 0.1 && Math.abs(parts[1] - -1) < 0.1;
      },
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>Factor the expression:</em> Find numbers that multiply to 2 and add to 3.</li>
            <li><em>Since both the constant term and the coefficient of x are positive, we need two negative numbers.</em></li>
            <li><em>The factors of 2 are:</em> 1 and 2.</li>
            <li><em>Check sum:</em> (-1) + (-2) = -3, which is the negative of what we need.</li>
            <li><em>Factored form:</em> $$x^2 + 3x + 2 = (x + 1)(x + 2) = 0$$.</li>
            <li><em>Apply zero product property:</em> Either $$x + 1 = 0$$ or $$x + 2 = 0$$.</li>
            <li><em>Solutions:</em> $$x = -1$$ or $$x = -2$$.</li>
          </ol>
        </div>
      `,
    },
    {
      question:
        "14. For what value(s) of k will the equation x² + kx + 25 = 0 have equal roots?",
      answer: "k = ±10",
      check: (ans) => {
        let cleaned = ans.replace(/\s+/g, "").toLowerCase();
        return (
          cleaned.includes("±10") ||
          cleaned.includes("10,-10") ||
          cleaned.includes("-10,10")
        );
      },
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li><em>For equal roots, the discriminant must be zero:</em> $$b^2 - 4ac = 0$$</li>
            <li><em>Identify coefficients:</em> $$a = 1, b = k, c = 25$$</li>
            <li><em>Substitute:</em> $$k^2 - 4 \\times 1 \\times 25 = 0$$</li>
            <li><em>Simplify:</em> $$k^2 - 100 = 0$$</li>
            <li><em>Solve for k:</em> $$k^2 = 100$$</li>
            <li><em>Take square root of both sides:</em> $$k = \\pm 10$$</li>
            <li><em>Therefore, k = 10 or k = -10</em></li>
          </ol>
        </div>
      `,
    },
    {
      question: "15. Evaluate: (a) 7⁰, (b) 3⁶ × 3⁻⁶, (c) 2⁻⁴, (d) 27¹/³",
      answer: [1, 1, 0.0625, 3],
      check: (ans) => {
        let parts = ans.split(",").map((s) => parseFloat(s.trim()));
        return (
          Math.abs(parts[0] - 1) < 0.001 &&
          Math.abs(parts[1] - 1) < 0.001 &&
          Math.abs(parts[2] - 0.0625) < 0.001 &&
          Math.abs(parts[3] - 3) < 0.001
        );
      },
      solution: `
        <div class="example">
          <h3>Step-by-Step Explanation</h3>
          <ol>
            <li>(a) Any nonzero number raised to the power 0 equals 1, so $$7^0 = 1.$$</li>
            <li>(b) Using the exponent rule, $$3^6 \\times 3^{-6} = 3^{6-6} = 3^0 = 1.$$</li>
            <li>(c) A negative exponent indicates the reciprocal: $$2^{-4} = \\frac{1}{2^4} = \\frac{1}{16} = 0.0625.$$</li>
            <li>(d) The cube root of 27 is 3, so $$27^{1/3} = 3.$$</li>
          </ol>
        </div>
      `,
    },
  ],
  completingTheSquare: [
    {
      question:
        "1. Solve x² + 6x + 5 = 0 by completing the square. (Enter the two solutions separated by a comma)",
      answer: [-5, -1],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - -5) < 0.1 && Math.abs(parts[1] - -1) < 0.1;
      },
    },
    {
      question:
        "2. Complete the square for x² + 8x + 15 = 0 and state the solutions.",
      answer: [-3, -5],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - -5) < 0.1 && Math.abs(parts[1] - -3) < 0.1;
      },
    },
    {
      question:
        "3. Express x² + 10x + 21 in vertex form by completing the square.",
      answer: "(x+5)² - 4",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase().includes("(x+5)^2-4") ||
        ans.replace(/\s+/g, "").toLowerCase().includes("(x+5)²-4"),
    },
    {
      question:
        "4. Complete the square for 2x² + 8x + 6 = 0 and state the solutions.",
      answer: "x = -2 ± 1",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("-2"),
    },
    {
      question: "5. Rewrite x² + 12x + 36 in completed square form.",
      answer: "(x+6)²",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase().includes("(x+6)^2") ||
        ans.replace(/\s+/g, "").toLowerCase().includes("(x+6)²"),
    },
    {
      question:
        "6. Complete the square for x² - 4x + 4 = 0 and find the solution.",
      answer: "x = 2",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("2"),
    },
    {
      question:
        "7. Using completing the square, transform 3x² + 12x + 7 into vertex form.",
      answer: "3(x+2)² - 5",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase().includes("3(x+2)^2-5"),
    },
    {
      question: "8. Complete the square for 6x² + 24x + 18.",
      answer: "(x+2)² - 1",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase().includes("(x+2)^2-1"),
    },
    {
      question: "9. Find the roots of x² + x - 6 = 0 by completing the square.",
      answer: [2, -3],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - -3) < 0.1 && Math.abs(parts[1] - 2) < 0.1;
      },
    },
    {
      question:
        "10. Express x² - 10x + 16 in vertex form by completing the square.",
      answer: "(x-5)² - 9",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase().includes("(x-5)^2-9"),
    },
  ],
  inequalities: [
    {
      question: "1. For the inequality y > 2x + 1, which region is shaded?",
      answer: "above",
      check: (ans) => ans.toLowerCase().includes("above"),
    },
    {
      question: "2. Graph y ≤ -x + 4. Should the boundary be solid or dashed?",
      answer: "solid",
      check: (ans) => ans.toLowerCase().includes("solid"),
    },
    {
      question: "3. For y < 3x - 2, which region is shaded?",
      answer: "below",
      check: (ans) => ans.toLowerCase().includes("below"),
    },
    {
      question: "4. Find the intersection point of y = 2x + 3 and y = -x + 1.",
      answer: "(-0.67, 1.67)",
      check: (ans) => ans.replace(/\s+/g, "").includes("-0.67"),
    },
    {
      question: "5. Find the intersection of y = x + 2 and y = -2x + 5.",
      answer: "(1, 3)",
      check: (ans) => ans.includes("1") && ans.includes("3"),
    },
    {
      question:
        "6. For the inequality y ≥ 4 - x, should the boundary be dashed or solid?",
      answer: "solid",
      check: (ans) => ans.toLowerCase().includes("solid"),
    },
    {
      question:
        "7. Graph the inequality x > 2. Which side of the line x = 2 is shaded?",
      answer: "right",
      check: (ans) => ans.toLowerCase().includes("right"),
    },
    {
      question: "8. Graph y < -2. Describe the graph.",
      answer: "line at y = -2 with area below",
      check: (ans) => ans.toLowerCase().includes("below"),
    },
    {
      question: "9. Find the intersection of y = 3x + 1 and y = 3x - 4.",
      answer: "none",
      check: (ans) => ans.toLowerCase().includes("none"),
    },
    {
      question: "10. Solve: y = x + 3 and y = 2x - 1. Find the intersection.",
      answer: "(4, 7)",
      check: (ans) => ans.includes("4") && ans.includes("7"),
    },
    {
      question: "11. Simplify 2y ≤ 4x + 6 into slope-intercept form.",
      answer: "y ≤ 2x + 3",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("2x+3"),
    },
    {
      question: "12. Does the point (2, 7) satisfy y < 2x + 5?",
      answer: "yes",
      check: (ans) => ans.toLowerCase().includes("yes"),
    },
    {
      question: "13. For y ≥ ½x - 2, what is the y-intercept?",
      answer: "-2",
      check: (ans) => ans.includes("-2"),
    },
    {
      question:
        "14. Solve the simultaneous equations: 2x + y = 5 and x - y = 1.",
      answer: "(2, 1)",
      check: (ans) => ans.includes("2") && ans.includes("1"),
    },
    {
      question: "15. For y > -3, describe the graph.",
      answer: "line y = -3 (dashed) with shading above",
      check: (ans) => ans.toLowerCase().includes("above"),
    },
    {
      question: "16. Rewrite -x + y < 4 in slope-intercept form.",
      answer: "y < x + 4",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("x+4"),
    },
    {
      question:
        "17. Determine the solution region for y ≤ -2x + 6 and y ≥ x - 2.",
      answer: "the overlapping region between the two lines",
      check: (ans) => ans.toLowerCase().includes("overlap"),
    },
    {
      question: "18. For y < 2, is the boundary line included?",
      answer: "no",
      check: (ans) => ans.toLowerCase().includes("no"),
    },
    {
      question: "19. Find the intersection of y = 0.5x + 2 and y = -x + 5.",
      answer: "(2, 3)",
      check: (ans) => ans.includes("2") && ans.includes("3"),
    },
    {
      question: "20. Graph x + y ≥ 4. Describe the boundary and shading.",
      answer:
        "solid line with shading towards the region satisfying the inequality",
      check: (ans) => ans.toLowerCase().includes("solid"),
    },
  ],
  proportion: [
    {
      question: "1. If y = 3x, what is y when x = 4?",
      answer: 12,
      check: (ans) => Math.abs(parseFloat(ans) - 12) < 0.1,
    },
    {
      question:
        "2. y is directly proportional to x. If y = 10 when x = 2, what is the constant k?",
      answer: 5,
      check: (ans) => Math.abs(parseFloat(ans) - 5) < 0.1,
    },
    {
      question: "3. Given y = 5x, find x when y = 40.",
      answer: 8,
      check: (ans) => Math.abs(parseFloat(ans) - 8) < 0.1,
    },
    {
      question:
        "4. If y is inversely proportional to x and y = 6 when x = 3, what is y when x = 6?",
      answer: 3,
      check: (ans) => Math.abs(parseFloat(ans) - 3) < 0.1,
    },
    {
      question: "5. For y = k/x, if y = 4 when x = 5, what is y when x = 10?",
      answer: 2,
      check: (ans) => Math.abs(parseFloat(ans) - 2) < 0.1,
    },
    {
      question:
        "6. If x is directly proportional to y and x = 7 when y = 14, what is x when y = 28?",
      answer: 14,
      check: (ans) => Math.abs(parseFloat(ans) - 14) < 0.1,
    },
    {
      question:
        "7. Express the relationship 'y is inversely proportional to x'.",
      answer: "y = k/x",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("k/x"),
    },
    {
      question:
        "8. If y is directly proportional to x and y = 8 when x = 2, what is y when x = 5?",
      answer: 20,
      check: (ans) => Math.abs(parseFloat(ans) - 20) < 0.1,
    },
    {
      question: "9. For y = kx, if y = 15 when x = 5, what is y when x = 10?",
      answer: 30,
      check: (ans) => Math.abs(parseFloat(ans) - 30) < 0.1,
    },
    {
      question:
        "10. If y = 12 when x = 3 in a direct proportion, what is the constant k?",
      answer: 4,
      check: (ans) => Math.abs(parseFloat(ans) - 4) < 0.1,
    },
    {
      question:
        "11. In an inverse proportion y = k/x, if y = 2 when x = 8, what is k?",
      answer: 16,
      check: (ans) => Math.abs(parseFloat(ans) - 16) < 0.1,
    },
    {
      question:
        "12. If y is inversely proportional to x and y = 10 when x = 2, what is x when y = 5?",
      answer: 4,
      check: (ans) => Math.abs(parseFloat(ans) - 4) < 0.1,
    },
    {
      question:
        "13. Given x = 9 when y = 3 in an inverse proportion, find y when x = 18.",
      answer: 1.5,
      check: (ans) => Math.abs(parseFloat(ans) - 1.5) < 0.1,
    },
    {
      question:
        "14. For a direct proportion, if doubling x doubles y, true or false?",
      answer: "true",
      check: (ans) => ans.toLowerCase().includes("true"),
    },
    {
      question:
        "15. For an inverse proportion, if x increases, does y increase or decrease?",
      answer: "decrease",
      check: (ans) => ans.toLowerCase().includes("decrease"),
    },
    {
      question: "16. Solve: If y = 4x and x = 7, what is y?",
      answer: 28,
      check: (ans) => Math.abs(parseFloat(ans) - 28) < 0.1,
    },
    {
      question:
        "17. If x is directly proportional to y and x = 10 when y = 5, what is y when x = 20?",
      answer: 10,
      check: (ans) => Math.abs(parseFloat(ans) - 10) < 0.1,
    },
    {
      question:
        "18. In an inverse relationship, if x is halved, what happens to y?",
      answer: "doubles",
      check: (ans) => ans.toLowerCase().includes("double"),
    },
    {
      question: "19. If y = kx and y = 24 when x = 6, what is k?",
      answer: 4,
      check: (ans) => Math.abs(parseFloat(ans) - 4) < 0.1,
    },
    {
      question: "20. For y = k/x, if x = 4 when y = 9, what is y when x = 8?",
      answer: 4.5,
      check: (ans) => Math.abs(parseFloat(ans) - 4.5) < 0.1,
    },
  ],
  functions: [
    {
      question: "1. If f(x) = 2x + 3, what is f(4)?",
      answer: 11,
      check: (ans) => Math.abs(parseFloat(ans) - 11) < 0.1,
    },
    {
      question: "2. Find f(-2) for f(x) = x² - 4.",
      answer: 0,
      check: (ans) => Math.abs(parseFloat(ans) - 0) < 0.1,
    },
    {
      question: "3. If f(x) = x³, what is f(3)?",
      answer: 27,
      check: (ans) => Math.abs(parseFloat(ans) - 27) < 0.1,
    },
    {
      question: "4. Determine f(0) for f(x) = 5x - 7.",
      answer: -7,
      check: (ans) => Math.abs(parseFloat(ans) + 7) < 0.1,
    },
    {
      question: "5. If f(x) = 3x², what is f(2)?",
      answer: 12,
      check: (ans) => Math.abs(parseFloat(ans) - 12) < 0.1,
    },
    {
      question: "6. Find x for which f(x) = 0 if f(x) = x - 5.",
      answer: 5,
      check: (ans) => Math.abs(parseFloat(ans) - 5) < 0.1,
    },
    {
      question: "7. If f(x) = x² + 2x + 1, express it in a simpler form.",
      answer: "(x+1)²",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("(x+1)^2"),
    },
    {
      question: "8. Determine f(1) for f(x) = 4 - x.",
      answer: 3,
      check: (ans) => Math.abs(parseFloat(ans) - 3) < 0.1,
    },
    {
      question: "9. If f(x) = 2x + 1 and f(x) = 9, find x.",
      answer: 4,
      check: (ans) => Math.abs(parseFloat(ans) - 4) < 0.1,
    },
    {
      question: "10. If f(x) = 7 - 3x, what is f(2)?",
      answer: 1,
      check: (ans) => Math.abs(parseFloat(ans) - 1) < 0.1,
    },
    {
      question: "11. Find the inverse of f(x) = x + 4.",
      answer: "x - 4",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("x-4"),
    },
    {
      question: "12. If f(x) = x², what is f(3)?",
      answer: 9,
      check: (ans) => Math.abs(parseFloat(ans) - 9) < 0.1,
    },
    {
      question: "13. Graph f(x) = x. What is its slope?",
      answer: "1",
      check: (ans) => ans.includes("1"),
    },
    {
      question: "14. For f(x) = 2x + 3, what is the y-intercept?",
      answer: 3,
      check: (ans) => Math.abs(parseFloat(ans) - 3) < 0.1,
    },
    {
      question: "15. If f(x) = x² - 1, what is f(2)?",
      answer: 3,
      check: (ans) => Math.abs(parseFloat(ans) - 3) < 0.1,
    },
    {
      question: "16. Determine f(5) for f(x) = 3x - 2.",
      answer: 13,
      check: (ans) => Math.abs(parseFloat(ans) - 13) < 0.1,
    },
    {
      question: "17. If f(x) = x/2, what is f(8)?",
      answer: 4,
      check: (ans) => Math.abs(parseFloat(ans) - 4) < 0.1,
    },
    {
      question: "18. For f(x) = 2x + 5, what is f(-3)?",
      answer: -1,
      check: (ans) => Math.abs(parseFloat(ans) - -1) < 0.1,
    },
    {
      question: "19. Find f(1) for f(x) = -x + 4.",
      answer: 3,
      check: (ans) => Math.abs(parseFloat(ans) - 3) < 0.1,
    },
    {
      question: "20. If f(x) = 3x² + 2, what is f(0)?",
      answer: 2,
      check: (ans) => Math.abs(parseFloat(ans) - 2) < 0.1,
    },
  ],
  transformations: [
    {
      question: "1. What effect does replacing x with (x-3) in f(x) have?",
      answer: "shift right by 3",
      check: (ans) => ans.toLowerCase().includes("right"),
    },
    {
      question: "2. What does adding 4 to f(x) do to its graph?",
      answer: "shift up by 4",
      check: (ans) => ans.toLowerCase().includes("up"),
    },
    {
      question: "3. What is the effect of multiplying f(x) by 2?",
      answer: "vertical stretch by 2",
      check: (ans) =>
        ans.toLowerCase().includes("vertical") && ans.includes("2"),
    },
    {
      question:
        "4. If f(x) is reflected across the x-axis, what is the new function?",
      answer: "-f(x)",
      check: (ans) => ans.replace(/\s+/g, "").includes("-f(x)"),
    },
    {
      question: "5. What does replacing f(x) with f(x)+2 do?",
      answer: "shift up by 2",
      check: (ans) => ans.toLowerCase().includes("up"),
    },
    {
      question: "6. What is the result of replacing x with -x in f(x)?",
      answer: "reflection across the y-axis",
      check: (ans) => ans.toLowerCase().includes("y-axis"),
    },
    {
      question: "7. What transformation does f(x-2) represent?",
      answer: "shift right by 2",
      check: (ans) => ans.toLowerCase().includes("right"),
    },
    {
      question: "8. What does f(x)-3 do to the graph?",
      answer: "shift down by 3",
      check: (ans) => ans.toLowerCase().includes("down"),
    },
    {
      question: "9. What is the effect of replacing f(x) with -2f(x)?",
      answer: "vertical stretch by 2 and reflection over x-axis",
      check: (ans) =>
        ans.toLowerCase().includes("vertical") &&
        ans.toLowerCase().includes("reflect"),
    },
    {
      question: "10. If g(x) = f(x+1), what is the transformation?",
      answer: "shift left by 1",
      check: (ans) => ans.toLowerCase().includes("left"),
    },
    {
      question: "11. If h(x) = f(x)/2, what happens to the graph?",
      answer: "vertical compression by 2",
      check: (ans) => ans.toLowerCase().includes("compress"),
    },
    {
      question: "12. What does f(2x) do to the graph of f(x)?",
      answer: "horizontal compression by 1/2",
      check: (ans) =>
        ans.toLowerCase().includes("horizontal") &&
        ans.toLowerCase().includes("compress"),
    },
    {
      question: "13. What transformation is represented by f(x-4)+3?",
      answer: "shift right 4 and up 3",
      check: (ans) =>
        ans.toLowerCase().includes("right") && ans.toLowerCase().includes("up"),
    },
    {
      question:
        "14. If the graph of f(x) is reflected over the y-axis, what is the new function?",
      answer: "f(-x)",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("f(-x)"),
    },
    {
      question: "15. What does f(x)+x do to a linear function?",
      answer: "changes the slope",
      check: (ans) => ans.toLowerCase().includes("slope"),
    },
    {
      question: "16. How is the graph of -f(x)+2 different from f(x)?",
      answer: "reflected vertically and shifted up by 2",
      check: (ans) =>
        ans.toLowerCase().includes("reflected") &&
        ans.toLowerCase().includes("up"),
    },
    {
      question: "17. If g(x)=3f(x), what transformation occurs?",
      answer: "vertical stretch by 3",
      check: (ans) =>
        ans.toLowerCase().includes("vertical") && ans.includes("3"),
    },
    {
      question: "18. What is the effect of f(x/2)?",
      answer: "horizontal stretch by 2",
      check: (ans) =>
        ans.toLowerCase().includes("horizontal") &&
        ans.toLowerCase().includes("stretch"),
    },
    {
      question: "19. If g(x)=f(x)-5, what is the transformation?",
      answer: "shift down by 5",
      check: (ans) => ans.toLowerCase().includes("down"),
    },
    {
      question: "20. Describe the effect of h(x)=f(x)-x.",
      answer: "alters the slope; not a pure translation",
      check: (ans) => ans.toLowerCase().includes("slope"),
    },
  ],
  differentiation: [
    {
      question: "1. What is the derivative of f(x) = x²?",
      answer: "2x",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase() === "2x",
    },
    {
      question: "2. Find the derivative of f(x) = 3x³.",
      answer: "9x²",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase() === "9x²" ||
        ans.replace(/\s+/g, "").toLowerCase() === "9x^2",
    },
    {
      question: "3. Differentiate f(x) = 5x.",
      answer: "5",
      check: (ans) => ans.trim() === "5",
    },
    {
      question: "4. What is the derivative of f(x) = 2x² + 3x + 4?",
      answer: "4x+3",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("4x+3"),
    },
    {
      question: "5. Differentiate f(x) = x³ - 3x² + x.",
      answer: "3x²-6x+1",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase() === "3x²-6x+1" ||
        ans.replace(/\s+/g, "").toLowerCase() === "3x^2-6x+1",
    },
    {
      question: "6. Differentiate f(x) = 4x².",
      answer: "8x",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase() === "8x",
    },
    {
      question: "7. Differentiate f(x) = 7x - 2.",
      answer: "7",
      check: (ans) => ans.trim() === "7",
    },
    {
      question: "8. What is the derivative of f(x) = x⁴?",
      answer: "4x³",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("4x"),
    },
    {
      question: "9. Find the derivative of f(x) = 6x² - x.",
      answer: "12x-1",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase() === "12x-1",
    },
    {
      question: "10. Differentiate f(x) = 10x.",
      answer: "10",
      check: (ans) => ans.trim() === "10",
    },
    {
      question: "11. What is the derivative of f(x) = 2x³ + x²?",
      answer: "6x²+2x",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase() === "6x²+2x" ||
        ans.replace(/\s+/g, "").toLowerCase() === "6x^2+2x",
    },
    {
      question: "12. Differentiate f(x) = 9x² + 3.",
      answer: "18x",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase() === "18x",
    },
    {
      question: "13. Find the derivative of f(x) = 0.5x².",
      answer: "x",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase() === "x",
    },
    {
      question: "14. Differentiate f(x) = 3x² - 4x + 5.",
      answer: "6x-4",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase() === "6x-4",
    },
    {
      question: "15. What is the derivative of f(x) = x² + 2x?",
      answer: "2x+2",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase() === "2x+2",
    },
    {
      question: "16. Differentiate f(x) = x² - x + 1.",
      answer: "2x-1",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase() === "2x-1",
    },
    {
      question: "17. Find the derivative of f(x) = 4x³.",
      answer: "12x²",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase() === "12x²" ||
        ans.replace(/\s+/g, "").toLowerCase() === "12x^2",
    },
    {
      question: "18. Differentiate f(x) = 3x².",
      answer: "6x",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase() === "6x",
    },
    {
      question: "19. What is the derivative of f(x) = 2x² - 5x + 3?",
      answer: "4x-5",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase() === "4x-5",
    },
    {
      question: "20. Differentiate f(x) = x³.",
      answer: "3x²",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase() === "3x²" ||
        ans.replace(/\s+/g, "").toLowerCase() === "3x^2",
    },
  ],
  circle: [
    {
      question: "1. What is the formula for the circumference of a circle?",
      answer: "2πr",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase().includes("2πr") ||
        ans.replace(/\s+/g, "").toLowerCase().includes("2pr"),
    },
    {
      question: "2. What is the area of a circle with radius 5? (π ≈ 3.14)",
      answer: 78.5,
      check: (ans) => Math.abs(parseFloat(ans) - 78.5) < 1,
    },
    {
      question: "3. If a circle's diameter is 10, what is its radius?",
      answer: 5,
      check: (ans) => Math.abs(parseFloat(ans) - 5) < 0.1,
    },
    {
      question: "4. Find the area of a circle with diameter 8.",
      answer: 50.24,
      check: (ans) => Math.abs(parseFloat(ans) - 50.24) < 1,
    },
    {
      question: "5. What is the formula for the area of a circle?",
      answer: "πr²",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase().includes("πr²") ||
        ans.replace(/\s+/g, "").toLowerCase().includes("pr^2"),
    },
    {
      question:
        "6. If a circle's circumference is 31.4, what is the approximate radius? (π ≈ 3.14)",
      answer: 5,
      check: (ans) => Math.abs(parseFloat(ans) - 5) < 0.1,
    },
    {
      question: "7. Calculate the circumference of a circle with radius 7.",
      answer: 43.96,
      check: (ans) => Math.abs(parseFloat(ans) - 43.96) < 1,
    },
    {
      question:
        "8. If the area of a circle is 28.26, what is its radius? (π ≈ 3.14)",
      answer: 3,
      check: (ans) => Math.abs(parseFloat(ans) - 3) < 0.1,
    },
    {
      question: "9. A circle has a radius of 10. What is its area?",
      answer: 314,
      check: (ans) => Math.abs(parseFloat(ans) - 314) < 5,
    },
    {
      question: "10. What is the relationship between diameter and radius?",
      answer: "diameter is twice the radius",
      check: (ans) => ans.toLowerCase().includes("twice"),
    },
    {
      question:
        "11. How do you calculate the circumference given the diameter?",
      answer: "C = πd",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("πd"),
    },
    {
      question: "12. Find the area of a circle with radius 2.",
      answer: 12.56,
      check: (ans) => Math.abs(parseFloat(ans) - 12.56) < 0.5,
    },
    {
      question:
        "13. If a circle's area doubles, by what factor does the radius increase?",
      answer: "√2",
      check: (ans) => ans.includes("√2") || ans.toLowerCase().includes("sqrt2"),
    },
    {
      question: "14. What is the formula for the area of a semicircle?",
      answer: "(1/2)πr²",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("1/2πr²"),
    },
    {
      question:
        "15. Calculate the circumference for a circle with diameter 14.",
      answer: 43.98,
      check: (ans) => Math.abs(parseFloat(ans) - 43.98) < 1,
    },
    {
      question:
        "16. If a circle's circumference is 62.8, what is its diameter? (π ≈ 3.14)",
      answer: 20,
      check: (ans) => Math.abs(parseFloat(ans) - 20) < 0.1,
    },
    {
      question:
        "17. What is the formula to calculate the radius from the area?",
      answer: "r = √(A/π)",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("√(a/π)"),
    },
    {
      question:
        "18. A circle's radius increases by 1. What is the approximate increase in its area?",
      answer: "2πr+π",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("2πr"),
    },
    {
      question:
        "19. Find the circumference of a circle with area 78.5. (π ≈ 3.14)",
      answer: 31.4,
      check: (ans) => Math.abs(parseFloat(ans) - 31.4) < 1,
    },
    {
      question: "20. Express the area of a circle in terms of its diameter.",
      answer: "πd²/4",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("πd²/4"),
    },
  ],
  constructions: [
    {
      question:
        "1. What instrument is essential for drawing arcs in geometric constructions?",
      answer: "compass",
      check: (ans) => ans.toLowerCase().includes("compass"),
    },
    {
      question: "2. Name the tool used along with a compass for constructions.",
      answer: "straightedge",
      check: (ans) => ans.toLowerCase().includes("straightedge"),
    },
    {
      question:
        "3. What construction is used to find the perpendicular bisector of a segment?",
      answer: "perpendicular bisector",
      check: (ans) => ans.toLowerCase().includes("bisector"),
    },
    {
      question:
        "4. In constructing an angle bisector, which tools are required?",
      answer: "compass and straightedge",
      check: (ans) =>
        ans.toLowerCase().includes("compass") &&
        ans.toLowerCase().includes("straightedge"),
    },
    {
      question:
        "5. Describe how to construct a perpendicular from a point to a line.",
      answer: "use compass and straightedge",
      check: (ans) => ans.toLowerCase().includes("compass"),
    },
    {
      question:
        "6. What is the first step in constructing the perpendicular bisector of a segment?",
      answer: "draw arcs from both endpoints",
      check: (ans) => ans.toLowerCase().includes("arc"),
    },
    {
      question:
        "7. How do you locate the midpoint of a segment using constructions?",
      answer: "by constructing its perpendicular bisector",
      check: (ans) => ans.toLowerCase().includes("bisector"),
    },
    {
      question:
        "8. What construction is used to draw a parallel line through a point?",
      answer: "using alternate interior angles",
      check: (ans) => ans.toLowerCase().includes("parallel"),
    },
    {
      question: "9. In constructions, what is a common use for a circle?",
      answer: "to draw arcs",
      check: (ans) => ans.toLowerCase().includes("arc"),
    },
    {
      question:
        "10. Which construction technique is used to divide an angle into equal parts?",
      answer: "angle bisector",
      check: (ans) => ans.toLowerCase().includes("bisector"),
    },
    {
      question: "11. What is the significance of a compass in constructions?",
      answer: "it draws circles of a given radius",
      check: (ans) => ans.toLowerCase().includes("circle"),
    },
    {
      question: "12. What does 'locus' refer to in constructions?",
      answer: "set of points satisfying a condition",
      check: (ans) => ans.toLowerCase().includes("set"),
    },
    {
      question:
        "13. How can you construct a line parallel to a given line through a point?",
      answer: "using a compass and straightedge method",
      check: (ans) => ans.toLowerCase().includes("parallel"),
    },
    {
      question: "14. What is a common construction to replicate a given angle?",
      answer: "angle copying",
      check: (ans) => ans.toLowerCase().includes("copy"),
    },
    {
      question: "15. How do you construct a triangle given three sides?",
      answer: "by using the three-sided construction",
      check: (ans) => ans.toLowerCase().includes("triangle"),
    },
    {
      question: "16. What is the role of a straightedge in constructions?",
      answer: "to draw straight lines",
      check: (ans) => ans.toLowerCase().includes("line"),
    },
    {
      question: "17. Which construction finds the center of a circle?",
      answer: "intersection of perpendicular bisectors",
      check: (ans) => ans.toLowerCase().includes("perpendicular"),
    },
    {
      question: "18. How do you construct an equilateral triangle?",
      answer: "using a compass and straightedge",
      check: (ans) => ans.toLowerCase().includes("equilateral"),
    },
    {
      question: "19. What is the purpose of constructing an angle bisector?",
      answer: "to divide the angle into two equal parts",
      check: (ans) => ans.toLowerCase().includes("equal"),
    },
    {
      question:
        "20. In constructions, what does it mean if two lines are congruent?",
      answer: "they have equal length",
      check: (ans) => ans.toLowerCase().includes("equal"),
    },
  ],
};
// Track the current quiz question index for each topic
// Track the current quiz question index for each topic
const currentQuizIndex = {};
Object.keys(quizzes).forEach((topic) => {
  currentQuizIndex[topic] = 0;
});

// Desmos graphing calculators
const graphCalculators = {};

// Initialize Desmos graphs for inequalities
function initializeGraphs() {
  if (!window.Desmos) {
    console.error("Desmos library not loaded!");
    return;
  }

  // Example 1: y > 2x + 1
  if (document.getElementById("graph1")) {
    graphCalculators[1] = Desmos.Calculator(document.getElementById("graph1"), {
      expressions: false,
      settingsMenu: false,
      zoomButtons: true,
      lockViewport: false,
      border: false,
    });
  }

  // Example 2: y ≤ -x + 4
  if (document.getElementById("graph2")) {
    graphCalculators[2] = Desmos.Calculator(document.getElementById("graph2"), {
      expressions: false,
      settingsMenu: false,
      zoomButtons: true,
      lockViewport: false,
      border: false,
    });
  }

  // Example 3: Compound inequality 1 < x + 2 ≤ 5 (or -1 < x ≤ 3)
  if (document.getElementById("graph3")) {
    graphCalculators[3] = Desmos.Calculator(document.getElementById("graph3"), {
      expressions: false,
      settingsMenu: false,
      zoomButtons: true,
      lockViewport: false,
      border: false,
    });
  }

  // Example 4: System of Linear Inequalities
  if (document.getElementById("graph4")) {
    graphCalculators[4] = Desmos.Calculator(document.getElementById("graph4"), {
      expressions: false,
      settingsMenu: false,
      zoomButtons: true,
      lockViewport: false,
      border: false,
    });
  }

  // Example 5: Quadratic Inequality
  if (document.getElementById("graph5")) {
    graphCalculators[5] = Desmos.Calculator(document.getElementById("graph5"), {
      expressions: false,
      settingsMenu: false,
      zoomButtons: true,
      lockViewport: false,
      border: false,
    });
  }

  setupGraphs();
}

// Set up the graph expressions and styling
function setupGraphs() {
  // Example 1: y > 2x + 1
  if (graphCalculators[1]) {
    graphCalculators[1].setMathBounds({
      left: -5,
      right: 5,
      bottom: -3,
      top: 7,
    });

    // Boundary: y = 2x + 1 (dashed for strict inequality)
    graphCalculators[1].setExpression({
      id: "boundary1",
      latex: "y = 2x + 1",
      color: Desmos.Colors.BLUE,
      lineStyle: Desmos.Styles.DASHED,
    });

    // Region: y > 2x + 1
    graphCalculators[1].setExpression({
      id: "region1",
      latex: "y > 2x + 1",
      color: Desmos.Colors.BLUE,
      lineWidth: 0,
    });

    // Test point (0,0)
    graphCalculators[1].setExpression({
      id: "testpoint1",
      latex: "(0,0)",
      color: Desmos.Colors.GREEN,
      pointSize: 9,
      label: "(0,0)",
    });

    // Point on y-intercept (0,1)
    graphCalculators[1].setExpression({
      id: "yint1",
      latex: "(0,1)",
      color: Desmos.Colors.RED,
      pointSize: 9,
      label: "(0,1)",
    });
  }

  // Example 2: y ≤ -x + 4
  if (graphCalculators[2]) {
    graphCalculators[2].setMathBounds({
      left: -5,
      right: 5,
      bottom: -3,
      top: 7,
    });

    // Boundary: y = -x + 4 (solid for inclusive inequality)
    graphCalculators[2].setExpression({
      id: "boundary2",
      latex: "y = -x + 4",
      color: Desmos.Colors.BLUE,
    });

    // Region: y ≤ -x + 4
    graphCalculators[2].setExpression({
      id: "region2",
      latex: "y \\le -x + 4",
      color: Desmos.Colors.BLUE,
      lineWidth: 0,
    });

    // Test point (0,0)
    graphCalculators[2].setExpression({
      id: "testpoint2",
      latex: "(0,0)",
      color: Desmos.Colors.GREEN,
      pointSize: 9,
      label: "(0,0)",
    });

    // Point on y-intercept (0,4)
    graphCalculators[2].setExpression({
      id: "yint2",
      latex: "(0,4)",
      color: Desmos.Colors.RED,
      pointSize: 9,
      label: "(0,4)",
    });
  }

  // Example 3: Compound Inequality -1 < x ≤ 3
  if (graphCalculators[3]) {
    graphCalculators[3].setMathBounds({
      left: -5,
      right: 5,
      bottom: -3,
      top: 3,
    });

    // Left vertical boundary: x = -1 (dashed, excluded)
    graphCalculators[3].setExpression({
      id: "left_bound",
      latex: "x = -1",
      color: Desmos.Colors.BLUE,
      lineStyle: Desmos.Styles.DASHED,
    });

    // Right vertical boundary: x = 3 (solid, included)
    graphCalculators[3].setExpression({
      id: "right_bound",
      latex: "x = 3",
      color: Desmos.Colors.BLUE,
    });

    // Region: -1 < x ≤ 3
    graphCalculators[3].setExpression({
      id: "region3",
      latex: "-1 < x \\le 3",
      color: Desmos.Colors.BLUE,
      lineWidth: 0,
    });

    // Open point at x = -1
    graphCalculators[3].setExpression({
      id: "leftpoint",
      latex: "(-1,0)",
      color: Desmos.Colors.RED,
      pointSize: 9,
      pointStyle: "OPEN",
      label: "x = -1",
    });

    // Closed point at x = 3
    graphCalculators[3].setExpression({
      id: "rightpoint",
      latex: "(3,0)",
      color: Desmos.Colors.RED,
      pointSize: 9,
      label: "x = 3",
    });
  }

  // Example 4: System of Linear Inequalities: y ≥ x + 1 and y < -2x + 6
  if (graphCalculators[4]) {
    graphCalculators[4].setMathBounds({
      left: -5,
      right: 5,
      bottom: -3,
      top: 7,
    });

    // First inequality: y ≥ x + 1
    // Boundary line (solid since it's inclusive)
    graphCalculators[4].setExpression({
      id: "boundary4_1",
      latex: "y = x + 1",
      color: Desmos.Colors.BLUE,
    });
    // Region: y ≥ x + 1
    graphCalculators[4].setExpression({
      id: "region4_1",
      latex: "y \\ge x + 1",
      color: Desmos.Colors.BLUE,
      lineWidth: 0,
    });

    // Second inequality: y < -2x + 6
    // Boundary line (dashed since the inequality is strict)
    graphCalculators[4].setExpression({
      id: "boundary4_2",
      latex: "y = -2x + 6",
      color: Desmos.Colors.ORANGE,
      lineStyle: Desmos.Styles.DASHED,
    });
    // Region: y < -2x + 6
    graphCalculators[4].setExpression({
      id: "region4_2",
      latex: "y < -2x + 6",
      color: Desmos.Colors.ORANGE,
      lineWidth: 0,
    });

    // Test point (0,0) for the system
    graphCalculators[4].setExpression({
      id: "testpoint4",
      latex: "(0,0)",
      color: Desmos.Colors.GREEN,
      pointSize: 9,
      label: "(0,0)",
    });
  }

  // Example 5: Quadratic Inequality: y ≤ x^2 - 4
  if (graphCalculators[5]) {
    graphCalculators[5].setMathBounds({
      left: -5,
      right: 5,
      bottom: -5,
      top: 5,
    });

    // Boundary: y = x^2 - 4 (solid curve for inclusive inequality)
    graphCalculators[5].setExpression({
      id: "boundary5",
      latex: "y = x^2 - 4",
      color: Desmos.Colors.BLUE,
    });

    // Region: y ≤ x^2 - 4
    graphCalculators[5].setExpression({
      id: "region5",
      latex: "y \\le x^2 - 4",
      color: Desmos.Colors.BLUE,
      lineWidth: 0,
    });

    // Test point (0,0)
    graphCalculators[5].setExpression({
      id: "testpoint5",
      latex: "(0,0)",
      color: Desmos.Colors.GREEN,
      pointSize: 9,
      label: "(0,0)",
    });
  }
}

// Function to show a specific example
function showExample(num) {
  // Hide all examples
  document.querySelectorAll(".example-section").forEach((example) => {
    example.style.display = "none";
  });

  // Show selected example
  const selectedExample = document.getElementById("example" + num);
  if (selectedExample) {
    selectedExample.style.display = "block";

    // Resize the graph to fit container after displaying
    if (graphCalculators[num]) {
      setTimeout(() => {
        graphCalculators[num].resize();
      }, 50);
    }
  }
}

// Set PDF.js workerSrc so that PDF.js can load its worker
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js";

// Global variables to hold the loaded PDF document, current page, and total pages.
let currentPdfDoc = null;
let currentPage = 1;
let totalPages = 0;

// Function to render a specific page in the canvas.
function renderPage(pageNum) {
  currentPdfDoc.getPage(pageNum).then((page) => {
    const scale = 1.5; // Adjust scale as needed
    const viewport = page.getViewport({ scale: scale });
    const canvas = document.getElementById("pdf-canvas");
    if (!canvas) {
      console.error("Canvas element not found.");
      return;
    }
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    // Clear the canvas before rendering the new page
    context.clearRect(0, 0, canvas.width, canvas.height);
    page
      .render({
        canvasContext: context,
        viewport: viewport,
      })
      .promise.then(() => {
        // Update the page number display after rendering
        const pageDisplay = document.getElementById("pdf-page-display");
        if (pageDisplay) {
          pageDisplay.textContent = `Page ${pageNum} of ${totalPages}`;
        }
      });
  });
}

// Function to load the PDF for the selected topic.
function loadPDFForTopic(topic) {
  const pdfUrl = pdfFiles[topic];
  if (!pdfUrl) {
    console.error("No PDF found for this topic.");
    return;
  }
  pdfjsLib
    .getDocument(pdfUrl)
    .promise.then((pdfDoc) => {
      currentPdfDoc = pdfDoc;
      totalPages = pdfDoc.numPages;
      currentPage = 1;
      renderPage(currentPage);
      // Display navigation controls.
      const navContainer = document.getElementById("pdf-navigation");
      if (navContainer) {
        navContainer.style.display = "block";
      }
    })
    .catch((err) => {
      console.error("Error loading PDF: " + err);
    });
}

// Functions to navigate between pages.
function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    renderPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
  }
}

// Function to display the current quiz question for a given topic
function displayQuizQuestion(topic) {
  const quizBank = quizzes[topic];
  if (!quizBank) return;

  const index = currentQuizIndex[topic];
  const total = quizBank.length;
  const quizData = quizBank[index];

  const quizHTML = `
    <div class="quiz-card">
      <h3 class="quiz-title"><i class="fas fa-question-circle"></i> Practice Quiz</h3>
      
      <div id="quiz-container">
        <p class="quiz-question">${quizData.question}</p>
        
        <div class="mb-3">
          <input type="text" class="form-control answer-input" id="quiz-input-${topic}" placeholder="Enter your answer">
          <div class="form-text">Round to the nearest whole number if needed.</div>
        </div>
        
        <div class="d-flex">
          <button class="btn btn-primary me-2" onclick="checkQuizAnswer('${topic}')">
            <i class="fas fa-check-circle me-1"></i> Check Answer
          </button>
          <button class="btn btn-outline-primary" onclick="showHint('${topic}')">
            <i class="fas fa-lightbulb me-1"></i> Hint
          </button>
        </div>
        
        <div class="feedback" id="quiz-feedback-${topic}"></div>
        
        <div class="d-flex justify-content-between align-items-center mt-3">
          <span class="badge bg-light text-dark">Question ${
            index + 1
          }/${total}</span>
          <div>
            ${
              index > 0
                ? `<button class="btn btn-sm btn-outline-secondary me-2" onclick="prevQuizQuestion('${topic}')">
              <i class="fas fa-arrow-left me-1"></i> Previous
            </button>`
                : ""
            }
            ${
              index < total - 1
                ? `<button class="btn btn-sm btn-outline-primary" id="next-btn-${topic}" onclick="nextQuizQuestion('${topic}')">
                Next <i class="fas fa-arrow-right ms-1"></i>
              </button>`
                : `<button class="btn btn-sm btn-outline-success" onclick="restartQuiz('${topic}')">
                <i class="fas fa-redo me-1"></i> Restart Quiz
              </button>`
            }
          </div>
        </div>
      </div>
    </div>
  `;

  const quizSection = document.getElementById("quiz-section");
  if (quizSection) {
    quizSection.innerHTML = quizHTML;
  }
}

// Function to show a hint for the current question
function showHint(topic) {
  const feedbackElem = document.getElementById(`quiz-feedback-${topic}`);
  if (feedbackElem) {
    feedbackElem.textContent =
      "Hint: Use the formula appropriate for this problem and substitute the values carefully.";
    feedbackElem.className = "feedback";
    feedbackElem.style.display = "block";
    feedbackElem.style.backgroundColor = "rgba(67, 97, 238, 0.1)";
    feedbackElem.style.color = "#4361ee";
    feedbackElem.style.borderLeft = "4px solid #4361ee";
  }
}

function retypesetMath() {
  if (window.MathJax) {
    window.MathJax.typesetClear();
    window.MathJax.typeset();
  }
}

// Function to check the answer for the current quiz question
function checkQuizAnswer(topic) {
  const inputElem = document.getElementById(`quiz-input-${topic}`);
  const feedbackElem = document.getElementById(`quiz-feedback-${topic}`);
  if (!inputElem || !feedbackElem) return;

  const userAnswer = inputElem.value.trim();
  const quizData = quizzes[topic][currentQuizIndex[topic]];

  // Ensure the feedback element is visible
  feedbackElem.style.display = "block";

  let feedbackHtml = "";

  // Check if the answer is correct
  if (quizData.check(userAnswer)) {
    feedbackHtml += `<i class="fas fa-check-circle me-1"></i> Correct! The answer is ${quizData.answer}.`;
  } else {
    feedbackHtml += `<i class="fas fa-times-circle me-1"></i> Incorrect.`;
  }

  // Append detailed explanation (assuming each quiz object has a 'solution' property)
  feedbackHtml += `<br><br><strong>How to solve the problem:</strong><br>${quizData.solution}`;

  // Update the feedback element's class and inner HTML
  feedbackElem.className = quizData.check(userAnswer)
    ? "feedback correct"
    : "feedback incorrect";
  feedbackElem.innerHTML = feedbackHtml;

  retypesetMath();

  // Enable the next button regardless of the answer's correctness
  const nextBtn = document.getElementById(`next-btn-${topic}`);
  if (nextBtn) {
    nextBtn.disabled = false;
  }
}

// Function to move to the next quiz question
function nextQuizQuestion(topic) {
  if (currentQuizIndex[topic] < quizzes[topic].length - 1) {
    currentQuizIndex[topic]++;
    displayQuizQuestion(topic);
    // Scroll to quiz section
    const quizSection = document.getElementById("quiz-section");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// Function to move to the previous quiz question
function prevQuizQuestion(topic) {
  if (currentQuizIndex[topic] > 0) {
    currentQuizIndex[topic]--;
    displayQuizQuestion(topic);
    // Scroll to quiz section
    const quizSection = document.getElementById("quiz-section");
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}

// Function to restart the quiz for a topic
function restartQuiz(topic) {
  currentQuizIndex[topic] = 0;
  displayQuizQuestion(topic);
  // Scroll to quiz section
  const quizSection = document.getElementById("quiz-section");
  if (quizSection) {
    quizSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Function to retypeset math content when new math is added to the page
function retypesetMath() {
  if (window.MathJax) {
    window.MathJax.typesetClear();
    window.MathJax.typeset();
  }
}

// Mapping each topic to its PDF file
const pdfFiles = {
  compound: "pdfs/compound.pdf",
  quadraticEquation: "pdfs/quadraticEquation.pdf",
  completingTheSquare: "pdfs/completingTheSquare.pdf",
  // Add more topics as needed...
};

// Load lesson content and initialize quiz for the selected topic
function loadLesson(topic) {
  const lesson = lessons[topic];
  const contentDiv = document.getElementById("topic-content");
  if (!contentDiv) return;

  if (lesson) {
    // Show loading indicator
    contentDiv.innerHTML = '<div class="loader"></div>';

    // Simulate loading delay for better UX
    setTimeout(() => {
      // Create the lesson content
      let lessonHTML = `
        <div class="topic-card">
          <h2 class="topic-title">${lesson.title}</h2>
          ${lesson.content}
        </div>
      `;

      contentDiv.innerHTML = lessonHTML;

      // Append quiz container if quizzes exist for this topic
      if (quizzes[topic]) {
        currentQuizIndex[topic] = 0;
        const quizContainer = document.createElement("div");
        quizContainer.id = "quiz-section";
        contentDiv.appendChild(quizContainer);
        displayQuizQuestion(topic);
      }

      // Initialize Desmos graphs if this is the inequalities topic
      if (topic === "inequalities") {
        setTimeout(() => {
          initializeGraphs();
          // Show the first example by default
          showExample(1);
        }, 100);
      }

      // Properly render math expressions with MathJax
      retypesetMath();

      // Now that the content (and the canvas) is in the DOM, load the PDF for this topic
      loadPDFForTopic(topic);
    }, 500); // Short delay for loading effect
  } else {
    contentDiv.innerHTML = `
      <div class="topic-card">
        <h2 class="topic-title">Topic Not Found</h2>
        <div class="alert alert-warning">
          <i class="fas fa-exclamation-triangle me-2"></i> 
          The requested topic content is not available. Please select another topic.
        </div>
      </div>
    `;
  }
}

// Add custom styles for the graphical inequalities examples
function addGraphStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .graph-container {
      height: 400px;
      margin: 20px 0;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    .button-container {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin: 20px 0;
    }
    .example-section {
      background-color: #f0f8ff;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .example-section h3 {
      color: #2980b9;
      border-bottom: 1px solid #3498db;
      padding-bottom: 5px;
    }
    .steps {
      background-color: #fff;
      padding: 15px;
      border-left: 4px solid #3498db;
      margin-top: 15px;
    }
    .formula {
      font-style: italic;
      background-color: #f5f5f5;
      padding: 3px 6px;
      border-radius: 3px;
    }
    .key-point {
      font-weight: bold;
      color: #e74c3c;
    }
  `;
  document.head.appendChild(style);
}

const enabledTopics = [
  "compound",
  "quadraticEquation",
  "completingTheSquare",
  "inequalities",
];

// Navigation event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Add custom styles for inequalities graphs
  addGraphStyles();

  // Topic navigation
  const topicLinks = document.querySelectorAll("#topics-nav .nav-link");
  topicLinks.forEach((link) => {
    if (!enabledTopics.includes(link.getAttribute("data-topic"))) {
      // Add a custom disabled class for styling
      link.classList.add("disabled");
      // Disable pointer events to prevent clicks
      link.style.pointerEvents = "none";
      // Optionally, lower the opacity to visually indicate it is disabled
      link.style.opacity = "0.5";
    }
  });

  topicLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      topicLinks.forEach((l) => l.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      // Load the topic content
      const topic = this.getAttribute("data-topic");
      loadLesson(topic);
    });
  });

  // Dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      // Toggle icon
      const icon = this.querySelector("i");
      if (icon.classList.contains("fa-moon")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    });
  }

  // Initialize the first topic (compound)
  loadLesson("compound");
});
