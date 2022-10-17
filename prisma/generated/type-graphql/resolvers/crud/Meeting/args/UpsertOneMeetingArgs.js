"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneMeetingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingCreateInput_1 = require("../../../inputs/MeetingCreateInput");
const MeetingUpdateInput_1 = require("../../../inputs/MeetingUpdateInput");
const MeetingWhereUniqueInput_1 = require("../../../inputs/MeetingWhereUniqueInput");
let UpsertOneMeetingArgs = class UpsertOneMeetingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereUniqueInput_1.MeetingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MeetingWhereUniqueInput_1.MeetingWhereUniqueInput)
], UpsertOneMeetingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingCreateInput_1.MeetingCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MeetingCreateInput_1.MeetingCreateInput)
], UpsertOneMeetingArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingUpdateInput_1.MeetingUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MeetingUpdateInput_1.MeetingUpdateInput)
], UpsertOneMeetingArgs.prototype, "update", void 0);
UpsertOneMeetingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneMeetingArgs);
exports.UpsertOneMeetingArgs = UpsertOneMeetingArgs;
