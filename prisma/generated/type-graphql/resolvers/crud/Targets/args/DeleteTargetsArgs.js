"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTargetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsWhereUniqueInput_1 = require("../../../inputs/TargetsWhereUniqueInput");
let DeleteTargetsArgs = class DeleteTargetsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsWhereUniqueInput_1.TargetsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TargetsWhereUniqueInput_1.TargetsWhereUniqueInput)
], DeleteTargetsArgs.prototype, "where", void 0);
DeleteTargetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteTargetsArgs);
exports.DeleteTargetsArgs = DeleteTargetsArgs;
