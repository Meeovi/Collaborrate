"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMeetingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingCreateManyInput_1 = require("../../../inputs/MeetingCreateManyInput");
let CreateManyMeetingArgs = class CreateManyMeetingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MeetingCreateManyInput_1.MeetingCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyMeetingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyMeetingArgs.prototype, "skipDuplicates", void 0);
CreateManyMeetingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyMeetingArgs);
exports.CreateManyMeetingArgs = CreateManyMeetingArgs;
