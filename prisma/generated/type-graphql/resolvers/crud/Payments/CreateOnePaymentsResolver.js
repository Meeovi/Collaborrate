"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnePaymentsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOnePaymentsArgs_1 = require("./args/CreateOnePaymentsArgs");
const Payments_1 = require("../../../models/Payments");
const helpers_1 = require("../../../helpers");
let CreateOnePaymentsResolver = class CreateOnePaymentsResolver {
    async createOnePayments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).payments.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Payments_1.Payments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePaymentsArgs_1.CreateOnePaymentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOnePaymentsResolver.prototype, "createOnePayments", null);
CreateOnePaymentsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Payments_1.Payments)
], CreateOnePaymentsResolver);
exports.CreateOnePaymentsResolver = CreateOnePaymentsResolver;
