"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOpportunitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesCreateInput_1 = require("../../../inputs/OpportunitiesCreateInput");
const OpportunitiesUpdateInput_1 = require("../../../inputs/OpportunitiesUpdateInput");
const OpportunitiesWhereUniqueInput_1 = require("../../../inputs/OpportunitiesWhereUniqueInput");
let UpsertOpportunitiesArgs = class UpsertOpportunitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput)
], UpsertOpportunitiesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesCreateInput_1.OpportunitiesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OpportunitiesCreateInput_1.OpportunitiesCreateInput)
], UpsertOpportunitiesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesUpdateInput_1.OpportunitiesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OpportunitiesUpdateInput_1.OpportunitiesUpdateInput)
], UpsertOpportunitiesArgs.prototype, "update", void 0);
UpsertOpportunitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOpportunitiesArgs);
exports.UpsertOpportunitiesArgs = UpsertOpportunitiesArgs;
