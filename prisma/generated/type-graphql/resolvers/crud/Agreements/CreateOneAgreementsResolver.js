"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAgreementsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneAgreementsArgs_1 = require("./args/CreateOneAgreementsArgs");
const Agreements_1 = require("../../../models/Agreements");
const helpers_1 = require("../../../helpers");
let CreateOneAgreementsResolver = class CreateOneAgreementsResolver {
    async createOneAgreements(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).agreements.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Agreements_1.Agreements, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAgreementsArgs_1.CreateOneAgreementsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneAgreementsResolver.prototype, "createOneAgreements", null);
CreateOneAgreementsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Agreements_1.Agreements)
], CreateOneAgreementsResolver);
exports.CreateOneAgreementsResolver = CreateOneAgreementsResolver;
