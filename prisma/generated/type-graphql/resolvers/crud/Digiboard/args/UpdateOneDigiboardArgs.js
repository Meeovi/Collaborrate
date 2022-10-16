"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDigiboardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardUpdateInput_1 = require("../../../inputs/DigiboardUpdateInput");
const DigiboardWhereUniqueInput_1 = require("../../../inputs/DigiboardWhereUniqueInput");
let UpdateOneDigiboardArgs = class UpdateOneDigiboardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardUpdateInput_1.DigiboardUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DigiboardUpdateInput_1.DigiboardUpdateInput)
], UpdateOneDigiboardArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardWhereUniqueInput_1.DigiboardWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DigiboardWhereUniqueInput_1.DigiboardWhereUniqueInput)
], UpdateOneDigiboardArgs.prototype, "where", void 0);
UpdateOneDigiboardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneDigiboardArgs);
exports.UpdateOneDigiboardArgs = UpdateOneDigiboardArgs;
