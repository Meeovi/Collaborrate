"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOpportunitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesCreateInput_1 = require("../../../inputs/OpportunitiesCreateInput");
let CreateOpportunitiesArgs = class CreateOpportunitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesCreateInput_1.OpportunitiesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OpportunitiesCreateInput_1.OpportunitiesCreateInput)
], CreateOpportunitiesArgs.prototype, "data", void 0);
CreateOpportunitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOpportunitiesArgs);
exports.CreateOpportunitiesArgs = CreateOpportunitiesArgs;
