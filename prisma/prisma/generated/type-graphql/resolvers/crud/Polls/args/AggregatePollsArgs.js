"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePollsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PollsOrderByWithRelationInput_1 = require("../../../inputs/PollsOrderByWithRelationInput");
const PollsWhereInput_1 = require("../../../inputs/PollsWhereInput");
const PollsWhereUniqueInput_1 = require("../../../inputs/PollsWhereUniqueInput");
let AggregatePollsArgs = class AggregatePollsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsWhereInput_1.PollsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsWhereInput_1.PollsWhereInput)
], AggregatePollsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PollsOrderByWithRelationInput_1.PollsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregatePollsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PollsWhereUniqueInput_1.PollsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PollsWhereUniqueInput_1.PollsWhereUniqueInput)
], AggregatePollsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePollsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregatePollsArgs.prototype, "skip", void 0);
AggregatePollsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregatePollsArgs);
exports.AggregatePollsArgs = AggregatePollsArgs;
