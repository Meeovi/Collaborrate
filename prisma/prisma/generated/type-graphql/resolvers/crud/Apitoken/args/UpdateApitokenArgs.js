"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApitokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenUpdateInput_1 = require("../../../inputs/ApitokenUpdateInput");
const ApitokenWhereUniqueInput_1 = require("../../../inputs/ApitokenWhereUniqueInput");
let UpdateApitokenArgs = class UpdateApitokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenUpdateInput_1.ApitokenUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ApitokenUpdateInput_1.ApitokenUpdateInput)
], UpdateApitokenArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput)
], UpdateApitokenArgs.prototype, "where", void 0);
UpdateApitokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateApitokenArgs);
exports.UpdateApitokenArgs = UpdateApitokenArgs;
