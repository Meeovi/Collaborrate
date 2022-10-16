"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDeepdiveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveUpdateInput_1 = require("../../../inputs/DeepdiveUpdateInput");
const DeepdiveWhereUniqueInput_1 = require("../../../inputs/DeepdiveWhereUniqueInput");
let UpdateOneDeepdiveArgs = class UpdateOneDeepdiveArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveUpdateInput_1.DeepdiveUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DeepdiveUpdateInput_1.DeepdiveUpdateInput)
], UpdateOneDeepdiveArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveWhereUniqueInput_1.DeepdiveWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DeepdiveWhereUniqueInput_1.DeepdiveWhereUniqueInput)
], UpdateOneDeepdiveArgs.prototype, "where", void 0);
UpdateOneDeepdiveArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneDeepdiveArgs);
exports.UpdateOneDeepdiveArgs = UpdateOneDeepdiveArgs;
