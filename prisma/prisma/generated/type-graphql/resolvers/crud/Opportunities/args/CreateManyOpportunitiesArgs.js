"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyOpportunitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OpportunitiesCreateManyInput_1 = require("../../../inputs/OpportunitiesCreateManyInput");
let CreateManyOpportunitiesArgs = class CreateManyOpportunitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OpportunitiesCreateManyInput_1.OpportunitiesCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyOpportunitiesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyOpportunitiesArgs.prototype, "skipDuplicates", void 0);
CreateManyOpportunitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyOpportunitiesArgs);
exports.CreateManyOpportunitiesArgs = CreateManyOpportunitiesArgs;
