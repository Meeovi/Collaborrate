"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneApitokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenCreateInput_1 = require("../../../inputs/ApitokenCreateInput");
let CreateOneApitokenArgs = class CreateOneApitokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenCreateInput_1.ApitokenCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ApitokenCreateInput_1.ApitokenCreateInput)
], CreateOneApitokenArgs.prototype, "data", void 0);
CreateOneApitokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneApitokenArgs);
exports.CreateOneApitokenArgs = CreateOneApitokenArgs;
