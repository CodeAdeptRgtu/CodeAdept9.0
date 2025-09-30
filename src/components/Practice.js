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
      title: "Increment a Variable",
      topic: "Pointers",
      level: "Easy",
      link: "https://www.geeksforgeeks.org/problems/c-pointers-set-1introduction/1?page=1&category=Pointers&sortBy=submissions",
    },
    {
      title: "Kth Smallest",
      topic: "Arrays",
      level: "Easy",
      link: "https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1?page=1&category=Arrays&sortBy=submissions",
    },
    {
      title: "Check Equal Arrays",
      topic: "Arrays",
      level: "Easy",
      link: "https://www.geeksforgeeks.org/problems/check-if-two-arrays-are-equal-or-not3847/1?page=2&category=Arrays&sortBy=submissions",
    },
    {
      title: "Rotate Doubly LinkedList",
      topic: "Linked List",
      level: "Medium",
      link: "https://www.geeksforgeeks.org/problems/rotate-doubly-linked-list-by-p-nodes/1?page=5&category=Linked%20List&sortBy=submissions",
    },
    {
      title: "Longest Among Substring",
      topic: "Strings",
      level: "Medium",
      link: "https://www.geeksforgeeks.org/problems/longest-common-substring1452/1?page=1&category=Strings&sortBy=submissions",
    },
    {
      title: "Stack Using Queue",
      topic: "Stacks",
      level: "Medium",
      link: "https://www.geeksforgeeks.org/problems/stack-using-two-queues/1?page=1&category=Stack&sortBy=submissions",
    },
    {
      title: "Infix to Postfix",
      topic: "Stacks",
      level: "Medium",
      link: "https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1?page=1&category=Stack&sortBy=submissions",
    },
    {
      title: "Design MinMax Queue",
      topic: "Queue",
      level: "Medium",
      link: "https://www.geeksforgeeks.org/problems/design-minmax-queue/1?page=2&category=Queue&sortBy=submissions",
    },
    {
      title: "Card Rotation",
      topic: "Queue",
      level: "Medium",
      link: "https://www.geeksforgeeks.org/problems/card-rotation5834/1?page=2&category=Queue&sortBy=submissions",
    },
    {
      title: "Rotate LinkedList",
      topic: "Linked List",
      level: "Medium",
      link: "https://leetcode.com/problems/rotate-list/description/",
    },
    {
      title: "Find Length of Loop",
      topic: "Linked List",
      level: "Medium",
      link: "https://www.geeksforgeeks.org/problems/find-length-of-loop/1?page=1&category=Linked%20List&sortBy=submissions",
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
      title: "Row with Max 1s",
      topic: "Binary Search",
      level: "Medium",
      link: "https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1?page=2&category=Arrays&sortBy=submissions",
    },
    {
      title: "Camel Case",
      topic: "Tries",
      level: "Medium",
      link: "http://geeksforgeeks.org/problems/camel-case04234120/1?page=1&category=Trie&sortBy=submissions",
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
      title: "Minimum Spanning Tree",
      topic: "Graphs",
      level: "Hard",
      link: "https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1?page=1&category=Graph&sortBy=submissions",
    },
    {
      title: "Nth Catalan",
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
      title: "Flood Fill Algorithm",
      topic: "Graphs",
      level: "Hard",
      link: "https://www.geeksforgeeks.org/problems/flood-fill-algorithm1856/1?page=1&category=Graph&sortBy=submissions",
    },
    {
      title: "Activity Selection",
      topic: "Heaps",
      level: "Hard",
      link: "https://www.geeksforgeeks.org/problems/activity-selection-1587115620/1?page=1&category=Heap&sortBy=submissions",
    },
    {
      title: "Fixing 2 Nodes",
      topic: "BST",
      level: "Hard",
      link: "https://www.geeksforgeeks.org/problems/fixed-two-nodes-of-a-bst/1?page=2&category=Binary%20Search%20Tree&sortBy=submissions",
    },
    {
      title: "Phone Directory",
      topic: "Tries",
      level: "Hard",
      link: "https://www.geeksforgeeks.org/problems/phone-directory4628/1?page=1&category=Trie&sortBy=submissions",
    },
    {
      title: "LRU Cache",
      topic: "Hash",
      level: "Hard",
      link: "https://www.geeksforgeeks.org/problems/lru-cache/1?page=2&category=Hash&sortBy=submissions",
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
              <br />
              <strong>
                Aptitude mock test will be available after some time.
              </strong>
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
                      {q.link ? (
                        <a
                          href={q.link}
                          target="_blank"
                          rel="noreferrer"
                          className="practice-link"
                        >
                          Solve Now
                        </a>
                      ) : (
                        <span className="practice-link disabled">
                          Not Available
                        </span>
                      )}
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
