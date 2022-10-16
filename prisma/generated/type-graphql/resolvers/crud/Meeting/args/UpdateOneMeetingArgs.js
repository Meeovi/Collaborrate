"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneMeetingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingUpdateInput_1 = require("../../../inputs/MeetingUpdateInput");
const MeetingWhereUniqueInput_1 = require("../../../inputs/MeetingWhereUniqueInput");
let UpdateOneMeetingArgs = class UpdateOneMeetingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingUpdateInput_1.MeetingUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MeetingUpdateInput_1.MeetingUpdateInput)
], UpdateOneMeetingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereUniqueInput_1.MeetingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MeetingWhereUniqueInput_1.MeetingWhereUniqueInput)
], UpdateOneMeetingArgs.prototype, "where", void 0);
UpdateOneMeetingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneMeetingArgs);
exports.UpdateOneMeetingArgs = UpdateOneMeetingArgs;
