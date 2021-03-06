import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Menu from "../../../components/AdminMenu";
import Container from "../../../components/AdminContainer";
import {
	DeleteSubmission,
	getSubmissions,
} from "../../../actions/submissions.action";
import deleteIcon from "../../../images/delete.png";
import { DeleteSubmission } from "../../../actions/submissions.action";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function ViewSubmissionList() {
	const submissions = useSelector(state => state.submissions);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getSubmissions());
	}, []);

	if (submissions.submissions) {
		return (
			<div>
				<div className='w-screen h-screen grid grid-cols-12 bg-bk-white'>
					<div>
						<Menu status='submissions' />
					</div>
					<div className='col-span-11 mx-auto my-auto'>
						<div class='relative'>
							<Container title='submission' width='w-[68rem]' />
							<div class='absolute top-[7rem] ml-24'>
								<table className='table-auto w-[60rem] mx-auto my-5 '>
									<div className='w-[55rem]'>
										<thead>
											<tr className='text-lg font-medium uppercase bg-white'>
												<th className='w-[64rem] text-left pt-1 pl-2 pb-2 text-lg'>
													Assignment
												</th>
												<th className='w-[6.5rem] text-left text-lg'>Action</th>
											</tr>
										</thead>
									</div>

									<div className='h-[20rem] overflow-y-auto w-[62rem]'>
										<tbody className='leading-8'>
											{submissions.submissions.map(submission => (
												<tr className='even:bg-white odd:bg-slate-100 cursor-pointer'>
													<td
														className='px-5 py-1 w-[80rem]'
														onClick={() =>
															navigate(
																"/admin/submissions/view/" + submission._id,
															)
														}>
														{submission.caption}
													</td>
													<td className='px-5 py-1 w-[20rem]'>
														<img
															src={deleteIcon}
															className='h-4 cursor-pointer'
															onClick={
																(handleDelete = () => {
																	confirmAlert({
																		message: "Are you sure to delete?",
																		buttons: [
																			{
																				label: "Yes",
																				onClick: () => {
																					dispatch(
																						DeleteSubmission(submission._id),
																					);
																					window.location.reload();
																				},
																			},
																			{
																				label: "No",
																			},
																		],
																	});
																})
															}
														/>
													</td>
												</tr>
											))}
										</tbody>
									</div>
								</table>
								<button
									className='ml-[58rem] capitalize bg-regal-blue hover:bg-regal-blue-active mx-auto px-6 py-2 text-sm rounded-md font-bold text-white mt-6'
									onClick={() => navigate("/admin/submissions/create")}>
									Add New
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ViewSubmissionList;
