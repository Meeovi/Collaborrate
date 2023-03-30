"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyApitokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenWhereInput_1 = require("../../../inputs/ApitokenWhereInput");
let DeleteManyApitokenArgs = class DeleteManyApitokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenWhereInput_1.ApitokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenWhereInput_1.ApitokenWhereInput)
], DeleteManyApitokenArgs.prototype, "where", void 0);
DeleteManyApitokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyApitokenArgs);
exports.DeleteManyApitokenArgs = DeleteManyApitokenArgs;
