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
          <strong>What it is:</strong> Depreciation is the reduction in the value of an asset over time. The <em>straight-line method</em> assumes the asset loses the same amount of value each year, while compound (or reducing balance) depreciation decreases the value by a fixed percentage each year.
        </p>
        <p>
          <strong>Formula (Straight-Line):</strong> $$\\text{Depreciation per year} = \\frac{\\text{Initial Value} - \\text{Salvage Value}}{\\text{Useful Life}}$$
        </p>
        <p><strong>Step-by-Step Explanation (Straight-Line):</strong></p>
        <ol>
          <li><em>Determine the values:</em> Identify the asset's initial cost, its salvage (or residual) value, and its useful life.</li>
          <li><em>Calculate the loss:</em> Subtract the salvage value from the initial cost.</li>
          <li><em>Divide evenly:</em> Divide the total loss by the number of years to obtain the annual depreciation.</li>
        </ol>
        <div class="example">
          <h3>Example 1</h3>
          <p>An asset costing £5000, with a salvage value of £500, used for 5 years:</p>
          <ol>
            <li>Loss = $5000 - 500 = £4500$</li>
            <li>Depreciation per year = $$\\frac{4500}{5} = £900$$</li>
          </ol>
        </div>
        <p>
          <strong>Compound Depreciation:</strong> For assets that depreciate by a fixed percentage annually, the value is calculated as: 
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
          <em>Tip:</em> When calculating compound depreciation, always subtract the depreciation rate from 100% to determine the correct multiplier (e.g., for 15% depreciation, multiplier = 0.85). Avoid using the rate directly.
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
      </div>
    `,
  },
  quadraticEquation: {
    title: "Quadratic Equations (Quadratic Formula)",
    content: `
      <div class="lesson">
        <h2>Quadratic Equations: Quadratic Formula</h2>
        <p>
          <strong>Definition:</strong> The quadratic formula can be used to solve any quadratic equation in the form 
          $$ax^2 + bx + c = 0.$$ 
        </p>
        <p>
          <strong>Formula:</strong> $$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$
        </p>
        <p><strong>Step-by-Step Method:</strong></p>
        <ol>
          <li><em>Identify coefficients:</em> Determine $a$, $b$, and $c$ from the equation.</li>
          <li><em>Compute the discriminant:</em> Calculate $$\\Delta = b^2 - 4ac.$$</li>
          <li><em>Evaluate the square root:</em> Find $$\\sqrt{\\Delta}.$$</li>
          <li><em>Substitute and simplify:</em> Plug these values into the formula and simplify to obtain $x$.</li>
        </ol>
        <div class="example">
          <h3>Example 1</h3>
          <p>Solve $$2x^2 + 4x - 6 = 0.$$</p>
          <ol>
            <li>Coefficients: $a = 2$, $b = 4$, $c = -6$.</li>
            <li>Discriminant: $$\\Delta = 4^2 - 4 \\times 2 \\times (-6) = 16 + 48 = 64.$$</li>
            <li>Solve: 
              $$x = \\frac{-4 \\pm \\sqrt{64}}{2 \\times 2} = \\frac{-4 \\pm 8}{4}.$$ 
            </li>
            <li>Thus, $$x = \\frac{-4+8}{4}=1$$ or $$x = \\frac{-4-8}{4}=-3.$$</li>
          </ol>
        </div>
        <div class="example">
          <h3>Example 2</h3>
          <p>Solve $$x^2 - 4x + 4 = 0.$$</p>
          <ol>
            <li>Coefficients: $a = 1$, $b = -4$, $c = 4$.</li>
            <li>Discriminant: $$\\Delta = (-4)^2 - 4 \\times 1 \\times 4 = 16 - 16 = 0.$$</li>
            <li>Solve: 
              $$x = \\frac{-(-4) \\pm \\sqrt{0}}{2} = \\frac{4}{2} = 2.$$ 
            </li>
            <li>There is one repeated root: $x = 2$.</li>
          </ol>
        </div>
        <div class="example">
          <h3>Example 3</h3>
          <p>Solve $$x^2 + 3x - 10 = 0.$$</p>
          <ol>
            <li>Coefficients: $a = 1$, $b = 3$, $c = -10$.</li>
            <li>Discriminant: 
              $$\\Delta = 3^2 - 4 \\times 1 \\times (-10) = 9 + 40 = 49.$$ 
            </li>
            <li>Solve: 
              $$x = \\frac{-3 \\pm \\sqrt{49}}{2} = \\frac{-3 \\pm 7}{2}.$$ 
            </li>
            <li>Thus, $$x = 2$$ or $$x = -5.$$</li>
          </ol>
        </div>
        <p><strong>Additional Tips:</strong></p>
        <ul>
          <li>If $$\\Delta > 0$$, there are two distinct real roots.</li>
          <li>If $$\\Delta = 0$$, there is one real (repeated) root.</li>
          <li>If $$\\Delta < 0$$, the solutions are complex numbers.</li>
        </ul>
      </div>
    `,
  },
  completingTheSquare: {
    title: "Completing the Square",
    content: `
      <div class="lesson">
        <h2>Completing the Square</h2>
        <p>
          <strong>Overview:</strong> Completing the square transforms a quadratic equation in the form 
          $$ax^2 + bx + c = 0$$ 
          into a perfect square trinomial. This method is useful not only for solving the equation but also for rewriting the quadratic function in vertex form for graphing.
        </p>
        <p><strong>Step-by-Step Method:</strong></p>
        <ol>
          <li><em>Write in standard form:</em> Ensure the equation is $$ax^2 + bx + c = 0.$$</li>
          <li><em>If necessary, divide by $a$:</em> If $a \\neq 1$, divide every term by $a$ so that the coefficient of $x^2$ becomes 1.</li>
          <li><em>Isolate the $x$-terms:</em> Rewrite as $$x^2 + \\frac{b}{a}x = -\\frac{c}{a}.$$</li>
          <li><em>Find half the coefficient of $x$:</em> Let $$d = \\frac{b}{2a}$$ and compute $$d^2.$$</li>
          <li><em>Add and subtract $d^2$:</em> Write 
            $$x^2 + \\frac{b}{a}x + d^2 - d^2 = -\\frac{c}{a}.$$</li>
          <li><em>Rewrite the equation:</em> Express the left side as a perfect square: 
            $$ (x + d)^2 - d^2 = -\\frac{c}{a}.$$ 
          </li>
          <li><em>Solve for $x$:</em> Rearrange to 
            $$ (x + d)^2 = d^2 - \\frac{c}{a},$$ 
            take the square root of both sides, and solve for $x$.
          </li>
        </ol>
        <div class="example">
          <h3>Example 1</h3>
          <p>Solve $$x^2 + 6x + 5 = 0$$ by completing the square:</p>
          <ol>
            <li>Rearrange: $$x^2 + 6x = -5.$$</li>
            <li>Half of 6 is 3, so $$d = 3$$ and $$d^2 = 9.$$</li>
            <li>Add and subtract 9: $$x^2 + 6x + 9 = 9 - 5.$$</li>
            <li>Rewrite as: $$ (x + 3)^2 = 4.$$</li>
            <li>Take the square root: $$x + 3 = \\pm 2,$$ hence $$x = -1$$ or $$x = -5.$$</li>
          </ol>
        </div>
        <div class="example">
          <h3>Example 2</h3>
          <p>Solve $$3x^2 - 12x + 7 = 0$$ by completing the square:</p>
          <ol>
            <li>Divide by 3: $$x^2 - 4x + \\frac{7}{3} = 0.$$</li>
            <li>Rearrange: $$x^2 - 4x = -\\frac{7}{3}.$$</li>
            <li>Half of $-4$ is $-2$, so $$d = -2$$ and $$d^2 = 4.$$</li>
            <li>Add and subtract 4: $$x^2 - 4x + 4 = 4 - \\frac{7}{3}.$$</li>
            <li>Simplify: $$4 - \\frac{7}{3} = \\frac{5}{3}.$$</li>
            <li>Rewrite as: $$ (x - 2)^2 = \\frac{5}{3}.$$</li>
            <li>Take square roots: $$x - 2 = \\pm \\sqrt{\\frac{5}{3}},$$ hence $$x = 2 \\pm \\sqrt{\\frac{5}{3}}.$$</li>
          </ol>
        </div>
        <div class="example">
          <h3>Example 3</h3>
          <p>Solve $$2x^2 + 8x + 6 = 0$$ by completing the square:</p>
          <ol>
            <li>Divide by 2: $$x^2 + 4x + 3 = 0.$$</li>
            <li>Rearrange: $$x^2 + 4x = -3.$$</li>
            <li>Half of 4 is 2, so $$d = 2$$ and $$d^2 = 4.$$</li>
            <li>Add and subtract 4: $$x^2 + 4x + 4 = 4 - 3.$$</li>
            <li>Rewrite as: $$ (x + 2)^2 = 1.$$</li>
            <li>Take the square root: $$x + 2 = \\pm 1,$$ so $$x = -1$$ or $$x = -3.$$</li>
          </ol>
        </div>
        <p><strong>Additional Tips:</strong></p>
        <ul>
          <li>Ensure the equation remains balanced when adding and subtracting $$d^2$$.</li>
          <li>This method is also useful for converting a quadratic function to vertex form, $$a(x + d)^2 + k,$$ revealing the vertex of the parabola.</li>
          <li>Double-check by expanding the perfect square to verify it matches the original $x$-terms.</li>
        </ul>
      </div>
    `,
  },
  inequalities: {
    title: "Graphical Inequalities",
    content: `
      <div class="lesson">
        <h2>Graphical Inequalities</h2>
        <p>
          <strong>Definition:</strong> Graphical inequalities indicate which regions of a coordinate plane satisfy a given inequality. The boundary is drawn as a line—dashed for strict inequalities (< or >) and solid for inclusive inequalities (≤ or ≥)—and then the appropriate region is shaded.
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
        </div>
        
        <div id="example1" class="example-section">
          <h3>Example 1: y > 2x + 1</h3>
          <div id="graph1" class="graph-container"></div>
          <div class="steps">
            <ol>
              <li>Draw the line <span class="formula">y = 2x + 1</span> using a <span class="key-point">dashed line</span> (since > is a strict inequality).</li>
              <li>Test the point (0,0): Substitute into the inequality: <span class="formula">0 > 2(0) + 1</span>, i.e., <span class="formula">0 > 1</span> which is <span class="key-point">false</span>.</li>
              <li>Shade the region that does <span class="key-point">not</span> contain (0,0), which is the region above the line.</li>
            </ol>
          </div>
        </div>
        
        <div id="example2" class="example-section" style="display: none;">
          <h3>Example 2: y ≤ -x + 4</h3>
          <div id="graph2" class="graph-container"></div>
          <div class="steps">
            <ol>
              <li>Draw the line <span class="formula">y = -x + 4</span> using a <span class="key-point">solid line</span> (since ≤ is an inclusive inequality).</li>
              <li>Test the point (0,0): Substitute into the inequality: <span class="formula">0 ≤ -0 + 4</span>, i.e., <span class="formula">0 ≤ 4</span> which is <span class="key-point">true</span>.</li>
              <li>Shade the region containing (0,0), which is the region below the line.</li>
            </ol>
          </div>
        </div>
        
        <div id="example3" class="example-section" style="display: none;">
          <h3>Example 3: Compound Inequality 1 < x + 2 ≤ 5</h3>
          <div id="graph3" class="graph-container"></div>
          <div class="steps">
            <ol>
              <li>Solve for x by subtracting 2: <span class="formula">-1 < x ≤ 3</span>.</li>
              <li>This represents values of x between -1 and 3, where -1 is excluded and 3 is included.</li>
              <li>On a number line, use an open circle at x = -1 and a closed circle at x = 3.</li>
              <li>On a coordinate plane, this creates a vertical band between these x-values.</li>
            </ol>
          </div>
        </div>
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
    },
    {
      question:
        "2. Calculate compound interest: £500 at 4% compounded semi-annually for 2 years. (Round to two decimals)",
      answer: 541.22,
      check: (ans) => Math.abs(parseFloat(ans) - 541.22) < 1,
    },
    {
      question:
        "3. An asset worth £8000 depreciates linearly to £2000 over 6 years. What is the annual depreciation?",
      answer: 1000,
      check: (ans) => Math.abs(parseFloat(ans) - 1000) < 0.1,
    },
    {
      question:
        "4. A product sells for £150 with a cost of £100. What is the profit per item?",
      answer: 50,
      check: (ans) => Math.abs(parseFloat(ans) - 50) < 0.1,
    },
    {
      question:
        "5. A product marked up by 25% on a cost of £80: What is the selling price?",
      answer: 100,
      check: (ans) => Math.abs(parseFloat(ans) - 100) < 0.1,
    },
    {
      question:
        "6. What is the compound interest earned on £2000 at 3% compounded monthly for 1 year? (Round to two decimals)",
      answer: 60.84,
      check: (ans) => Math.abs(parseFloat(ans) - 60.84) < 1,
    },
    {
      question:
        "7. An asset depreciates 15% per year on its current value. What is its value after 2 years if starting at £10000?",
      answer: 7225,
      check: (ans) => Math.abs(parseFloat(ans) - 7225) < 1,
    },
    {
      question:
        "8. A company's revenue is £5000 and total costs are £4500. What is the profit?",
      answer: 500,
      check: (ans) => Math.abs(parseFloat(ans) - 500) < 0.1,
    },
    {
      question:
        "9. If the profit margin is 20% on sales of £250, what is the profit?",
      answer: 50,
      check: (ans) => Math.abs(parseFloat(ans) - 50) < 0.1,
    },
    {
      question:
        "10. If compound interest is applied annually, how many times is interest added in 5 years?",
      answer: 5,
      check: (ans) => Math.abs(parseFloat(ans) - 5) < 0.1,
    },
    {
      question:
        "11. For an investment with a 6% annual interest rate compounded annually, what is the interest rate per compounding period? (in %)",
      answer: 6,
      check: (ans) => Math.abs(parseFloat(ans) - 6) < 0.1,
    },
    {
      question:
        "12. Calculate compound interest for £1500 at 8% compounded quarterly for 2 years. (Round to two decimals)",
      answer: 1757.49,
      check: (ans) => Math.abs(parseFloat(ans) - 1757.49) < 1,
    },
    {
      question:
        "13. If an asset depreciates by £500 per year and has a salvage value of £1000 after 5 years, what was its initial value?",
      answer: 3500,
      check: (ans) => Math.abs(parseFloat(ans) - 3500) < 1,
    },
    {
      question:
        "14. A company increases its profit by 10% each year. If current profit is £1000, what is next year's profit?",
      answer: 1100,
      check: (ans) => Math.abs(parseFloat(ans) - 1100) < 0.1,
    },
    {
      question: "15. What is the formula for compound interest?",
      answer: "a = p(1 + r/n)^(n*t)",
      check: (ans) => ans.replace(/\s+/g, "").toLowerCase().includes("p(1+r"),
    },
    {
      question: "16. Define the straight-line depreciation formula.",
      answer: "depreciation = (initial value - salvage value) / useful life",
      check: (ans) =>
        ans
          .replace(/\s+/g, "")
          .toLowerCase()
          .includes("initialvalue-salvagevalue"),
    },
    {
      question: "17. Define the profit formula.",
      answer: "profit = revenue - cost",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase().includes("revenue-cost"),
    },
    {
      question:
        "18. If an investment of £1200 grows to £1440 in one year, what is the interest rate (in %)?",
      answer: 20,
      check: (ans) => Math.abs(parseFloat(ans) - 20) < 0.1,
    },
    {
      question:
        "19. A car costing £20,000 depreciates to £12,000 over 4 years using straight-line depreciation. What is the annual depreciation?",
      answer: 2000,
      check: (ans) => Math.abs(parseFloat(ans) - 2000) < 0.1,
    },
    {
      question:
        "20. A business sells 50 units at a profit of £30 per unit. What is the total profit?",
      answer: 1500,
      check: (ans) => Math.abs(parseFloat(ans) - 1500) < 0.1,
    },
    {
      question:
        "21. Bank A offers 2.5% compound interest annually. Bank B offers 2.4% compound interest monthly. Which bank offers the better rate over 3 years for £5000?",
      answer: "Bank B",
      check: (ans) => ans.toLowerCase().includes("b"),
    },
    {
      question:
        "22. An investment of £6000 grows to £8029.35 after 5 years of compound interest. What is the annual interest rate? (in %)",
      answer: 6,
      check: (ans) => Math.abs(parseFloat(ans) - 6) < 0.1,
    },
    {
      question:
        "23. A boat initially worth £12500 depreciates by 15% of its current value each year. After how many years will its value first fall below £5000?",
      answer: 7,
      check: (ans) => Math.abs(parseFloat(ans) - 7) < 0.1,
    },
    {
      question:
        "24. An investment has a variable interest rate: 4.3% for year 1 and 0.9% for years 2 and 3. If £10000 is invested, what is the final amount after 3 years? (Round to two decimals)",
      answer: 10618.59,
      check: (ans) => Math.abs(parseFloat(ans) - 10618.59) < 1,
    },
    {
      question:
        "25. Jean invests £12000 in an account for 2 years. In the first year, the interest rate is 2.8%. In the second year, the interest rate is half that of the first year. What is the final amount? (Round to two decimals)",
      answer: 12508.7,
      check: (ans) => Math.abs(parseFloat(ans) - 12508.7) < 1,
    },
    {
      question:
        "26. Calculate the continuous compound interest on £5000 at 3% for 4 years. (Round to two decimals)",
      answer: 5636.43,
      check: (ans) => Math.abs(parseFloat(ans) - 5636.43) < 1,
    },
    {
      question:
        "27. If an asset depreciates at a rate of 12% of its current value each year, after how many years will it be worth less than 40% of its original value?",
      answer: 8,
      check: (ans) => Math.abs(parseFloat(ans) - 8) < 0.1,
    },
    {
      question:
        "28. £2000 is invested for 3 years with compound interest. The first year has a rate of 2.5%, and the following years have a rate of x%. If the final amount is £2124.46, what is x? (in %)",
      answer: 1.8,
      check: (ans) => Math.abs(parseFloat(ans) - 1.8) < 0.1,
    },
    {
      question:
        "29. A company pays tax of 40% on its interest earnings. If it invests £5500 at R% for one year and receives £79.20 after tax, what is R? (in %)",
      answer: 3.6,
      check: (ans) => Math.abs(parseFloat(ans) - 3.6) < 0.1,
    },
    {
      question:
        "30. Two identical investments of £1000 are made. Investment A earns simple interest at 5% annually. Investment B earns compound interest at 4.8% annually. After how many years will Investment B exceed Investment A?",
      answer: 15,
      check: (ans) => Math.abs(parseFloat(ans) - 15) < 0.1,
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
    },
    {
      question: "3. Solve 3x² + 6x + 2 = 0 using the quadratic formula.",
      answer: "x = -1 ± (√3)/3",
      check: (ans) =>
        ans.replace(/\s+/g, "").toLowerCase().includes("-1") &&
        ans.includes("√"),
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
    },
    {
      question: "6. Solve 4x² - 12x + 9 = 0.",
      answer: "x = 1.5",
      check: (ans) => Math.abs(parseFloat(ans) - 1.5) < 0.1,
    },
    {
      question: "7. Solve x² + 2x - 15 = 0 using the quadratic formula.",
      answer: [3, -5],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - -5) < 0.1 && Math.abs(parts[1] - 3) < 0.1;
      },
    },
    {
      question: "8. Solve 2x² - 5x + 2 = 0 using the quadratic formula.",
      answer: [2, 0.5],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - 0.5) < 0.1 && Math.abs(parts[1] - 2) < 0.1;
      },
    },
    {
      question: "9. Solve 7x² + 14x - 21 = 0 using the quadratic formula.",
      answer: [1, -3],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - -3) < 0.1 && Math.abs(parts[1] - 1) < 0.1;
      },
    },
    {
      question: "10. Using the quadratic formula, solve x² + 3x + 2 = 0.",
      answer: [-1, -2],
      check: (ans) => {
        let parts = ans
          .split(",")
          .map((s) => parseFloat(s.trim()))
          .sort((a, b) => a - b);
        return Math.abs(parts[0] - -2) < 0.1 && Math.abs(parts[1] - -1) < 0.1;
      },
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

  setupGraphs();
}

// Set up the graph expressions and styling
function setupGraphs() {
  if (!graphCalculators[1]) return;

  // Setup Example 1: y > 2x + 1
  graphCalculators[1].setMathBounds({
    left: -5,
    right: 5,
    bottom: -3,
    top: 7,
  });

  // y = 2x + 1 (dashed)
  graphCalculators[1].setExpression({
    id: "boundary1",
    latex: "y = 2x + 1",
    color: Desmos.Colors.BLUE,
    lineStyle: Desmos.Styles.DASHED,
  });

  // Shade the region y > 2x + 1
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

  // Point on y-intercept
  graphCalculators[1].setExpression({
    id: "yint1",
    latex: "(0,1)",
    color: Desmos.Colors.RED,
    pointSize: 9,
    label: "(0,1)",
  });

  // Only setup other calculators if they exist
  if (!graphCalculators[2]) return;

  // Setup Example 2: y ≤ -x + 4
  graphCalculators[2].setMathBounds({
    left: -5,
    right: 5,
    bottom: -3,
    top: 7,
  });

  // y = -x + 4 (solid)
  graphCalculators[2].setExpression({
    id: "boundary2",
    latex: "y = -x + 4",
    color: Desmos.Colors.BLUE,
  });

  // Shade the region y ≤ -x + 4
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

  // Point on y-intercept
  graphCalculators[2].setExpression({
    id: "yint2",
    latex: "(0,4)",
    color: Desmos.Colors.RED,
    pointSize: 9,
    label: "(0,4)",
  });

  if (!graphCalculators[3]) return;

  // Setup Example 3: -1 < x ≤ 3
  graphCalculators[3].setMathBounds({
    left: -5,
    right: 5,
    bottom: -3,
    top: 3,
  });

  // Vertical line at x = -1 (dashed)
  graphCalculators[3].setExpression({
    id: "left_bound",
    latex: "x = -1",
    color: Desmos.Colors.BLUE,
    lineStyle: Desmos.Styles.DASHED,
  });

  // Vertical line at x = 3 (solid)
  graphCalculators[3].setExpression({
    id: "right_bound",
    latex: "x = 3",
    color: Desmos.Colors.BLUE,
  });

  // Shade the region -1 < x ≤ 3
  graphCalculators[3].setExpression({
    id: "region3",
    latex: "-1 < x \\le 3",
    color: Desmos.Colors.BLUE,
    lineWidth: 0,
  });

  // Point excluded at x = -1
  graphCalculators[3].setExpression({
    id: "leftpoint",
    latex: "(-1,0)",
    color: Desmos.Colors.RED,
    pointSize: 9,
    pointStyle: "OPEN",
    label: "x = -1",
  });

  // Point included at x = 3
  graphCalculators[3].setExpression({
    id: "rightpoint",
    latex: "(3,0)",
    color: Desmos.Colors.RED,
    pointSize: 9,
    label: "x = 3",
  });
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

// Function to check the answer for the current quiz question
function checkQuizAnswer(topic) {
  const inputElem = document.getElementById(`quiz-input-${topic}`);
  const feedbackElem = document.getElementById(`quiz-feedback-${topic}`);
  if (!inputElem || !feedbackElem) return;

  const userAnswer = inputElem.value.trim();
  const quizData = quizzes[topic][currentQuizIndex[topic]];

  // Clear any previous feedback styles
  feedbackElem.style.display = "block";

  if (quizData.check(userAnswer)) {
    feedbackElem.className = "feedback correct";
    feedbackElem.innerHTML = `<i class="fas fa-check-circle me-1"></i> Correct! ${quizData.answer}`;
  } else {
    feedbackElem.className = "feedback incorrect";
    feedbackElem.innerHTML = `<i class="fas fa-times-circle me-1"></i> Incorrect. Please try again.`;
  }

  // Enable the next button regardless of answer correctness
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

// Navigation event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Add custom styles for inequalities graphs
  addGraphStyles();

  // Topic navigation
  const topicLinks = document.querySelectorAll("#topics-nav .nav-link");

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

      // In a real app, you would save the preference to localStorage
    });
  }

  // Initialize the first topic (compound)
  loadLesson("compound");
});
