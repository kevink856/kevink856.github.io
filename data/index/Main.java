/**
 * By: Kevin Kim
 * Date: 6/2/2021
 * Title: Graphical Sort
 *
**/
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.List;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.SplittableRandom;
import javax.swing.GroupLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JSpinner;
import javax.swing.SpinnerNumberModel;

public class Main {

	private JFrame frame1, frame2, frame3;
	private JPanel panel1;
	private StartPanel panel2;
	private DrawPanel panel3;
	private List list;
	private JSpinner spinner;
	private int[] heights;
	private int width, value;

	public Main() {

		value = 0;
		width = 0;
		heights = new int[0];
		Panel1();
		Panel2();
		Panel3();

	}

	public void Panel1() {

		frame1 = new JFrame("Graphical Sort");
		frame1.setVisible(true);
		frame1.setSize(800, 800);
    frame1.setLocationRelativeTo(null);
		frame1.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame1.setResizable(false);

		JButton button1 = new JButton("Run");
		button1.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {

				if(list.getSelectedItem()==null) {

					frame3.setVisible(true);

				} else {

					switch(list.getSelectedItem()) {

					case("Bubble Sort"):
						bubbleSort();

					case("Selection Sort"):
						selectionSort();

					case("Insertion Sort"):
						insertionSort();

					case("Merge Sort"):
						mergeSort();

					case("Quick Sort"):
						quickSort();

					}

				}

			}
		} );

		JButton button2 = new JButton("Settings");
		button2.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {

				frame2.setVisible(true);

			}
		} );

		panel1 = new JPanel();
		panel1.setBackground(Color.CYAN);
		panel1.add(button1);
		panel1.add(button2);

		panel2 = new StartPanel();
		panel2.setBackground(Color.BLACK);

		panel3 = new DrawPanel();
		panel3.setBackground(Color.BLACK);

		frame1.add(panel2);
		frame1.add(panel1, BorderLayout.NORTH);

	}

	public void Panel2() {

		frame2 = new JFrame("Settings");
		frame2.setVisible(false);
		frame2.setSize(400, 400);
    frame2.setLocationRelativeTo(null);
		frame2.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		frame2.setResizable(false);

		JPanel panel = new JPanel();
		GroupLayout layout = new GroupLayout(panel);
		panel.setLayout(layout);
		layout.setAutoCreateGaps(true);
		layout.setAutoCreateContainerGaps(true);

		JButton button = new JButton("Save");
		button.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {

				drawBars();
				frame2.dispose();
				frame1.remove(panel2);
				frame1.add(panel3);
				frame1.validate();

			}
		} );

		JPanel smallPanel = new JPanel();
		smallPanel.add(button);

		list = new List(5, false);
		list.add("Bubble Sort");
		list.add("Selection Sort");
		list.add("Insertion Sort");
		list.add("Merge Sort");
		list.add("Quick Sort");

		spinner = new JSpinner(new SpinnerNumberModel(50,1,800,1));

		JLabel label1 = new JLabel("Sorting Algorithm");
		JLabel label2 = new JLabel("Number of Values (1-800)");

		layout.setHorizontalGroup(layout.createSequentialGroup()
			.addGroup(layout.createParallelGroup(GroupLayout.Alignment.LEADING)
				.addComponent(label1)
				.addComponent(list))
			.addGroup(layout.createParallelGroup(GroupLayout.Alignment.LEADING)
				.addComponent(label2)
				.addComponent(spinner))
		);
		layout.setVerticalGroup(layout.createSequentialGroup()
			.addGroup(layout.createParallelGroup(GroupLayout.Alignment.BASELINE)
				.addComponent(label1)
				.addComponent(label2))
			.addGroup(layout.createParallelGroup(GroupLayout.Alignment.BASELINE)
				.addComponent(list)
				.addComponent(spinner))
		);

		frame2.add(panel);
		frame2.add(smallPanel, BorderLayout.SOUTH);

	}
	public void Panel3() {

		frame3 = new JFrame("Error");
		frame3.setVisible(false);
		frame3.setSize(190, 200);
    frame3.setLocationRelativeTo(null);
		frame3.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		frame3.setResizable(false);

		JPanel panel = new JPanel();
		GroupLayout layout = new GroupLayout(panel);
		panel.setLayout(layout);
		layout.setAutoCreateGaps(true);
		layout.setAutoCreateContainerGaps(true);

		JButton button = new JButton("OK");
		button.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {

				frame3.dispose();

			}
		} );

		JPanel smallPanel = new JPanel();
		smallPanel.add(button);

		JLabel label1 = new JLabel("ERROR: Open Settings and");
		JLabel label2 = new JLabel("select a sorting algorithm");

		layout.setHorizontalGroup(layout.createSequentialGroup()
				.addGroup(layout.createParallelGroup(GroupLayout.Alignment.LEADING)
					.addComponent(label1)
					.addComponent(label2))
			);
			layout.setVerticalGroup(layout.createSequentialGroup()
				.addGroup(layout.createParallelGroup(GroupLayout.Alignment.BASELINE)
					.addComponent(label1))
				.addGroup(layout.createParallelGroup(GroupLayout.Alignment.BASELINE)
					.addComponent(label2))
			);

		frame3.add(panel);
		frame3.add(smallPanel, BorderLayout.SOUTH);

	}

	public class StartPanel extends JPanel {

		private static final long serialVersionUID = 1L;

		StartPanel() {

			setPreferredSize(new Dimension(800,800));

		}

		@Override
		public void paintComponent(Graphics g) {

			super.paintComponent(g);

			g.setColor(Color.WHITE);
			g.setFont(new Font("Impact", Font.BOLD, 150));
			g.drawString("Sorting", 155, 300);
			g.drawString("Simulator", 75, 450);

			g.setFont(new Font("Impact", Font.PLAIN, 50));
			g.drawString("By: Kevin Kim", 260, 600);

		}

	}

	public class DrawPanel extends JPanel {

		private static final long serialVersionUID = 1L;

		DrawPanel() {

			setPreferredSize(new Dimension(800,800));

		}

		@Override
		public void paintComponent(Graphics g) {

			super.paintComponent(g);

			g.setColor(Color.WHITE);
			for(int i=0; i<value; i++) {

				g.fillRect(width*i, 751-heights[i], width, heights[i]);

			}

		}

	}

	public void bubbleSort() {

		for(int i=0; i<value-1; i++) {

			for(int j=0; j<value-1-i; j++) {

				if(heights[j]>heights[j+1]) {

					int temp = heights[j];
					heights[j] = heights[j+1];
					heights[j+1] = temp;

					//try { Thread.sleep(100); }
					//catch(InterruptedException e) { }

					panel3.repaint();

				}
			}

		}

	}

	public void selectionSort() {



	}

	public void insertionSort() {



	}

	public void mergeSort() {



	}

	public void quickSort() {



	}

	public void drawBars() {

		SplittableRandom rand = new SplittableRandom();

		value = (Integer)spinner.getValue();
		width = 800/value;
		heights = new int[value];

		for(int i=0; i<value; i++) {

			heights[i] = rand.nextInt(1, 751);

		}

    panel3.repaint();

	}

	public static void main(String[] args) {

		new Main();

	}

}