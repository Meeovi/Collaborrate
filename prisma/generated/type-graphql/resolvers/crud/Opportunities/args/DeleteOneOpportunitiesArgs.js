"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneOpportunitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesWhereUniqueInput_1 = require("../../../inputs/OpportunitiesWhereUniqueInput");
let DeleteOneOpportunitiesArgs = class DeleteOneOpportunitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput)
], DeleteOneOpportunitiesArgs.prototype, "where", void 0);
DeleteOneOpportunitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneOpportunitiesArgs);
exports.DeleteOneOpportunitiesArgs = DeleteOneOpportunitiesArgs;
