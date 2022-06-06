"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTargetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsWhereInput_1 = require("../../../inputs/TargetsWhereInput");
let DeleteManyTargetsArgs = class DeleteManyTargetsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsWhereInput_1.TargetsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsWhereInput_1.TargetsWhereInput)
], DeleteManyTargetsArgs.prototype, "where", void 0);
DeleteManyTargetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTargetsArgs);
exports.DeleteManyTargetsArgs = DeleteManyTargetsArgs;
