"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOpportunitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesUpdateInput_1 = require("../../../inputs/OpportunitiesUpdateInput");
const OpportunitiesWhereUniqueInput_1 = require("../../../inputs/OpportunitiesWhereUniqueInput");
let UpdateOpportunitiesArgs = class UpdateOpportunitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesUpdateInput_1.OpportunitiesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OpportunitiesUpdateInput_1.OpportunitiesUpdateInput)
], UpdateOpportunitiesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OpportunitiesWhereUniqueInput_1.OpportunitiesWhereUniqueInput)
], UpdateOpportunitiesArgs.prototype, "where", void 0);
UpdateOpportunitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOpportunitiesArgs);
exports.UpdateOpportunitiesArgs = UpdateOpportunitiesArgs;
