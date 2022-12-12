"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDeepdiveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveUpdateManyMutationInput_1 = require("../../../inputs/DeepdiveUpdateManyMutationInput");
const DeepdiveWhereInput_1 = require("../../../inputs/DeepdiveWhereInput");
let UpdateManyDeepdiveArgs = class UpdateManyDeepdiveArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveUpdateManyMutationInput_1.DeepdiveUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DeepdiveUpdateManyMutationInput_1.DeepdiveUpdateManyMutationInput)
], UpdateManyDeepdiveArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveWhereInput_1.DeepdiveWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveWhereInput_1.DeepdiveWhereInput)
], UpdateManyDeepdiveArgs.prototype, "where", void 0);
UpdateManyDeepdiveArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyDeepdiveArgs);
exports.UpdateManyDeepdiveArgs = UpdateManyDeepdiveArgs;
