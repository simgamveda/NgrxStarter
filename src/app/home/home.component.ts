import {Component, OnInit} from "@angular/core";
import { UserServiceService } from "../services/user-service.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [`./home.component.scss`]
})
export class HomeComponent implements OnInit {

  public userList:Array<any> = [];
  public currentUserEdit:any;
  public userFormGroup:FormGroup;
  public loadingState:BehaviorSubject<any>=new BehaviorSubject(null);
  constructor(
    private userService:UserServiceService,
    private formBuilder:FormBuilder
  ){
    this.userFormGroup=this.formBuilder.group({})
   
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.fetchUserList()
  }
  private fetchUserList(){
    this.loadingState.next({loading:true})
    const options={
      url:"users/"
    }
    this.userService.getUserList(options).subscribe((userList:Array<any>)=>{
    this.loadingState.next({completed:true})
     this.userList=userList;
    },error=>{
      this.loadingState.next({error:true})
    })
  }

  public editUser(user:any)
  {
    this.initializeForm(user)
    this.currentUserEdit=user;
  }

  public initializeForm(user:any){
    this.userFormGroup=this.formBuilder.group({
      name:[user.name,[Validators.required]],
      username:[user.username,[Validators.required]],
      email:[user.email,[Validators.required]]
    })
  }

  public saveUser(user:any){
    console.log(this.userFormGroup.value)
  }
}
