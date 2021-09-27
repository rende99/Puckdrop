package org.PuckModel.model;

public class PasswordChange {
	private int id;
	private String oldPassword;
	private String newPassword;
	
	public int getId() {
		return this.id;
	}
	
	public String getOldPassword() {
		return this.oldPassword;
	}
	
	public String getNewPassword() {
		return this.newPassword;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public void setOldPassword(String oldP) {
		this.oldPassword = oldP;
	}
	
	public void setNewPassword(String newP) {
		this.newPassword = newP;
	}
	
}
