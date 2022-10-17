"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDigiboardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardUpdateManyMutationInput_1 = require("../../../inputs/DigiboardUpdateManyMutationInput");
const DigiboardWhereInput_1 = require("../../../inputs/DigiboardWhereInput");
let UpdateManyDigiboardArgs = class UpdateManyDigiboardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardUpdateManyMutationInput_1.DigiboardUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DigiboardUpdateManyMutationInput_1.DigiboardUpdateManyMutationInput)
], UpdateManyDigiboardArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardWhereInput_1.DigiboardWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardWhereInput_1.DigiboardWhereInput)
], UpdateManyDigiboardArgs.prototype, "where", void 0);
UpdateManyDigiboardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyDigiboardArgs);
exports.UpdateManyDigiboardArgs = UpdateManyDigiboardArgs;
