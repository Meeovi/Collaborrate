"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMeetingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingOrderByWithRelationInput_1 = require("../../../inputs/MeetingOrderByWithRelationInput");
const MeetingWhereInput_1 = require("../../../inputs/MeetingWhereInput");
const MeetingWhereUniqueInput_1 = require("../../../inputs/MeetingWhereUniqueInput");
let AggregateMeetingArgs = class AggregateMeetingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereInput_1.MeetingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingWhereInput_1.MeetingWhereInput)
], AggregateMeetingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MeetingOrderByWithRelationInput_1.MeetingOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateMeetingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingWhereUniqueInput_1.MeetingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingWhereUniqueInput_1.MeetingWhereUniqueInput)
], AggregateMeetingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateMeetingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateMeetingArgs.prototype, "skip", void 0);
AggregateMeetingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateMeetingArgs);
exports.AggregateMeetingArgs = AggregateMeetingArgs;
