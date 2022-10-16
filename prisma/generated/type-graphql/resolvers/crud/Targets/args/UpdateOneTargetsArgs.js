"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTargetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsUpdateInput_1 = require("../../../inputs/TargetsUpdateInput");
const TargetsWhereUniqueInput_1 = require("../../../inputs/TargetsWhereUniqueInput");
let UpdateOneTargetsArgs = class UpdateOneTargetsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsUpdateInput_1.TargetsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TargetsUpdateInput_1.TargetsUpdateInput)
], UpdateOneTargetsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsWhereUniqueInput_1.TargetsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TargetsWhereUniqueInput_1.TargetsWhereUniqueInput)
], UpdateOneTargetsArgs.prototype, "where", void 0);
UpdateOneTargetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTargetsArgs);
exports.UpdateOneTargetsArgs = UpdateOneTargetsArgs;
