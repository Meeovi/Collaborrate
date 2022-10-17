"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneDigiboardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardWhereUniqueInput_1 = require("../../../inputs/DigiboardWhereUniqueInput");
let DeleteOneDigiboardArgs = class DeleteOneDigiboardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardWhereUniqueInput_1.DigiboardWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DigiboardWhereUniqueInput_1.DigiboardWhereUniqueInput)
], DeleteOneDigiboardArgs.prototype, "where", void 0);
DeleteOneDigiboardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneDigiboardArgs);
exports.DeleteOneDigiboardArgs = DeleteOneDigiboardArgs;
