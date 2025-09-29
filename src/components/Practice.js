import { Container, Row, Col, Table, Badge } from "react-bootstrap";
import "./Practice.css";

function Practice() {
  const questions = [
    {
      title: "Majority Element",
      topic: "Arrays",
      level: "Easy",
      link: "https://leetcode.com/problems/majority-element/description/",
    },
    {
      title: "Merge 2 Sorted LinkedList",
      topic: "Linked List",
      level: "Easy",
      link: "https://leetcode.com/problems/merge-two-sorted-lists/description/",
    },
    {
      title: "Max Subarray Sum",
      topic: "Arrays",
      level: "Easy",
      link: "https://www.geeksforgeeks.org/dsa/largest-sum-contiguous-subarray/",
    },
    {
      title: "Circular LinkedList",
      topic: "Linked List",
      level: "Easy",
      link: "https://www.geeksforgeeks.org/dsa/check-if-a-linked-list-is-circular-linked-list/",
    },
    {
      title: "Kadane Algo",
      topic: "Arrays",
      level: "Easy",
      link: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
    },
    {
      title: "2 Sum Distinct",
      topic: "Arrays",
      level: "Medium",
      link: "https://www.geeksforgeeks.org/dsa/print-all-pairs-with-given-sum/",
    },
    {
      title: "Multiply Two Strings",
      topic: "Strings",
      level: "Medium",
      link: "https://www.geeksforgeeks.org/dsa/multiply-large-numbers-represented-as-strings/",
    },
    {
      title: "Stock Span Problem",
      topic: "Stacks",
      level: "Medium",
      link: "https://www.geeksforgeeks.org/dsa/the-stock-span-problem/",
    },
    {
      title: "Reverse a Stack using Recursion",
      topic: "Stacks",
      level: "Medium",
      link: "#",
    },
    {
      title: "Reverse a Queue",
      topic: "Queue",
      level: "Medium",
      link: "https://www.geeksforgeeks.org/dsa/reversing-a-queue/",
    },
    {
      title: "K Queues in Array",
      topic: "Queue",
      level: "Medium",
      link: "https://www.geeksforgeeks.org/dsa/efficiently-implement-k-queues-single-array/",
    },
    {
      title: "Rotate LinkedList",
      topic: "Linked List",
      level: "Medium",
      link: "https://leetcode.com/problems/rotate-list/description/",
    },
    {
      title: "Clone a LinkedList",
      topic: "Linked List",
      level: "Medium",
      link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
    },
    {
      title: "Remove Cycle",
      topic: "Linked List",
      level: "Medium",
      link: "https://leetcode.com/problems/linked-list-cycle-ii/description/",
    },
    {
      title: "Set Matrix Zero",
      topic: "Arrays",
      level: "Medium",
      link: "https://leetcode.com/problems/set-matrix-zeroes/description/",
    },
    {
      title: "Product of Array Except Itself",
      topic: "Arrays",
      level: "Medium",
      link: "https://leetcode.com/problems/product-of-array-except-self/description/",
    },
    {
      title: "Aggressive Cows",
      topic: "Binary Search",
      level: "Medium",
      link: "https://www.spoj.com/problems/AGGRCOW/",
    },
    {
      title: "Kth Level of Tree",
      topic: "Binary Tree",
      level: "Medium",
      link: "https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/",
    },
    {
      title: "Top View of Binary Tree",
      topic: "Binary Tree",
      level: "Medium",
      link: "https://leetcode.com/problems/binary-tree-right-side-view/description/",
    },
    {
      title: "Zig Zag Traversal",
      topic: "Binary Tree",
      level: "Medium",
      link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/",
    },
    {
      title: "BFS",
      topic: "Graphs",
      level: "Hard",
      link: "https://leetcode.com/problems/clone-graph/description/",
    },
    {
      title: "Nth Catalan Number",
      topic: "DP",
      level: "Hard",
      link: "https://leetcode.com/problems/unique-binary-search-trees/",
    },
    {
      title: "Edit Distance",
      topic: "DP",
      level: "Hard",
      link: "https://leetcode.com/problems/edit-distance/description/",
    },
    {
      title: "Merge Two BSTs",
      topic: "BST",
      level: "Hard",
      link: "https://leetcode.com/problems/merge-bsts-to-create-single-bst/description/",
    },
    {
      title: "Max Path Sum",
      topic: "Binary Tree",
      level: "Hard",
      link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/description/",
    },
    {
      title: "Dijkstra's Algorithm",
      topic: "Graphs",
      level: "Hard",
      link: "https://www.geeksforgeeks.org/dsa/dijkstras-shortest-path-algorithm-greedy-algo-7/",
    },
    {
      title: "Median in a Stream",
      topic: "Heaps",
      level: "Hard",
      link: "https://www.geeksforgeeks.org/dsa/median-of-stream-of-integers-running-integers",
    },
    {
      title: "3 Sum in a Balanced BST",
      topic: "BST",
      level: "Hard",
      link: "https://www.geeksforgeeks.org/dsa/find-if-there-is-a-triplet-in-bst-that-adds-to-0/",
    },
    {
      title: "Trapping Rainwater",
      topic: "Arrays",
      level: "Hard",
      link: "https://leetcode.com/problems/trapping-rain-water/description/",
    },
    {
      title: "LRU Cache",
      topic: "Linked List",
      level: "Hard",
      link: "https://leetcode.com/problems/lru-cache/description/",
    },
  ];

  const getBadgeVariant = (level) => {
    switch (level.toLowerCase()) {
      case "easy":
        return "success";
      case "medium":
        return "warning";
      case "hard":
        return "danger";
      default:
        return "secondary";
    }
  };

  return (
    <section className="practice-section" id="practice">
      <Container>
        <Row>
          <Col size={12}>
            <h2 className="practice-title mt-2">DSA Coding Questions</h2>
            <p className="practice-subtitle">
              Below is the curated list of <strong>DSA Coding Questions</strong>{" "}
              for practice.
            </p>
            <Table
              striped
              bordered
              hover
              responsive
              variant="dark"
              className="practice-table"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Question</th>
                  <th>Topic</th>
                  <th>Difficulty</th>
                  <th>Practice</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((q, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{q.title}</td>
                    <td>{q.topic}</td>
                    <td>
                      <Badge bg={getBadgeVariant(q.level)}>{q.level}</Badge>
                    </td>
                    <td>
                      <a
                        href={q.link}
                        target="_blank"
                        rel="noreferrer"
                        className="practice-link"
                      >
                        Solve Now
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Practice;
