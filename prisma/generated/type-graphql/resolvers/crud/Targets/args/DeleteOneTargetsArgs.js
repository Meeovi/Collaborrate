"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTargetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsWhereUniqueInput_1 = require("../../../inputs/TargetsWhereUniqueInput");
let DeleteOneTargetsArgs = class DeleteOneTargetsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsWhereUniqueInput_1.TargetsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TargetsWhereUniqueInput_1.TargetsWhereUniqueInput)
], DeleteOneTargetsArgs.prototype, "where", void 0);
DeleteOneTargetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTargetsArgs);
exports.DeleteOneTargetsArgs = DeleteOneTargetsArgs;
