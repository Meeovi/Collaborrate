"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOpportunitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesWhereUniqueInput_1 = require("../../../inputs/OpportunitiesWhereUniqueInput");
let DeleteOpportunitiesArgs = class DeleteOpportunitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput)
], DeleteOpportunitiesArgs.prototype, "where", void 0);
DeleteOpportunitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOpportunitiesArgs);
exports.DeleteOpportunitiesArgs = DeleteOpportunitiesArgs;
